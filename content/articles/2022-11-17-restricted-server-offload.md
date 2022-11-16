---
title: Copying Files off a Restricted Remote System
date: 2022-11-16T10:00:00.000Z
keywords: unix
heroimage: /blog/images/testimage.png
---

I should start by saying I'm not proud of this. This got me out of a tight spot with a production server that would be terminated within minutes, leaving not a lot of time for solutionising.

If you can, you should consider uploading the data to AWS S3, or rsync-ing to another server with easier access. Proper log transport (to CloudWatch or some other log aggregator) is always ideal, but that's not a helpful thing to realise when you're in this sort of situation.

## Prerequisites

The situation in question occurred in an AWS Systems Manager Session Manager session (try saying that five times quickly after a few drinks), a shell on an EC2 instance that was about to be automatically terminated. It had minimal permissions, no SSH access at all, and no automated log transport, hence the manual intervention.

The situation:

- You have shell access to a server,
- You do _not_ have SSH access to the server,
- The server in question has no access to AWS object storage, OR...
- You can't trust the logs or data to a third-party for compliance or security reasons,
- You don't have time to think of anything better.

## Solution

... or at least, _one possible_ solution: Tar, Base64, and good ol' fashioned copy-and-paste.

On the server:

```bash
tar cvjf ~/logs.tar.bz2 /var/log/whatever

base64 ~/logs.tar.bz2
```

This will encode the compressed archive as base64, making it trivial to copy-and-paste from the terminal session.

On your local machine:

### macOS

```bash
pbpaste | base64 -d | tar xjv
```

### Linux

```bash
# First paste the contents to a file, then ...

base64 -d logs.tar.bz2.base64 | tar xjv
```

## How does this work?

Tar is a tool for creating archives. It's ubiquitous in \*nix systems, and is well worth getting familiar with.

The flags `cvjf` mean:

- **C**reate a new archive,
- Be **v**erbose,
- Compress with Bzip2,
- **F**iles to compress:

The `x` flag is the opposite of `c`, and will decompress and expand an archive.

Base64 is a very common encoding format, and can be used as a means of encoding binary data (such as a bzip2 archive) in easily representable characters: ie plain text. You will often encounter it as a means of encoding small images for storage in things like databases, to avoid having to use some other method of object storage that might be less efficient.

In our case, it will encode a given file to stdout, but will also accept data from stdin.

The `-d` flag, as you might expect, reverses the process and decodes the data.

Good luck - may you never need this.
