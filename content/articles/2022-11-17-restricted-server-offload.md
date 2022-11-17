---
title: Copying Files off a Restricted Remote System
date: 2022-11-17T10:00:00.000Z
keywords: unix
heroimage: /blog/images/testimage.png
---

I should start by saying I'm not proud of this. This got me out of a tight spot with a production server that would be terminated within minutes, leaving not a lot of time for solutionising.

The server in question held some invaluable logs for debugging a production issue; if I didn't get them off the server immediately, I'd have to wait for another bug, which is not acceptable.

If you can, you should consider uploading the data to AWS S3, or rsync-ing to another server with easier access. Proper log transport (to CloudWatch or some other log aggregator) is always ideal, but that's not a helpful thing to realise when you're in this sort of situation.

## Prerequisites

In this case, I was in an AWS Systems Manager Session Manager session (try saying that five times quickly after a few drinks), which is a web-based shell for EC2 instances, in a shell on an EC2 instance that was about to be terminated. It had minimal permissions, no SSH access at all, bulletproof security, and no automated log transport, hence the manual intervention.

The situation:

- You need to offload some files from the server,
- You have some form of shell access to a server,
- You do _not_ have direct (or even indirect) SSH access to the server,
- The server has no access to an appropriate AWS storage solution, such as S3, OR...
- You can't trust the logs or data to a third-party for compliance or security reasons,
- You don't have time to think of anything better.

## Solution

... or at least, _one possible_ solution: Tar, Base64, and good ol' fashioned copy-and-paste.

On the server:

```bash
tar cj /var/log/whatever | base64
```

This will create an archive containing the specified path, encode the compressed archive as base64, making it trivial to copy-and-paste from the terminal session.

On your local machine:

### macOS

```bash
pbpaste | base64 -d | tar xjv
```

### Linux

```bash
# pbpaste doesn't exist in most Linux distros. First paste the contents to a file, then ...

base64 -d logs.tar.bz2.base64 | tar xjv
```

## How does this work?

Tar is a tool for creating archives. It's ubiquitous in \*nix systems, tremendously useful, and is well worth getting familiar with.

The flags `cj` mean:

- **C**reate a new archive,
- **j** compresses the archive with Bzip2, Gzip's slower but smaller cousin,
- **v**erbose; log file names,

The `x` flag is the opposite of `c`, and will decompress and expand an archive.

Base64 is a very common encoding format, and can be used as a means of encoding binary data (such as a bzip2 archive) in easily representable characters: ie ASCII or low-value Unicode characters. You will often encounter it as a means of encoding small images for storage in things like databases, to avoid having to use some other method of object storage that might be less efficient.

The `-d` flag, as you might expect, reverses the process and decodes the data.

Good luck - may you never need this.
