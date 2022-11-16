---
title: Find-and-Replace in the Terminal
date: 2022-11-16T10:00:00.000Z
keywords: unix
heroimage: /blog/images/testimage.png
---

IDEs and text editors usually give us a quick and easy find-and-replace function. If, like me, you're a masochist who uses things like Vim and spends lots of time staring at command prompts, it might seem as though such ease isn't something we deserve.

Fortunately, that's not the case. The solution devides nicely into two steps:

```bash
grep -lr '<phrase or regex to match>' ./some/path | xargs sed -i 's/<regex to match>/<replacement value>/g'
```

This is for GNU SED. **If you're using a Mac**, you have a slightly different version of SED, so you'll need the following command instead:

```bash
grep -lr '<phrase or regex to match>' ./some/path | xargs sed -i '' -e 's/<regex to match>/<replacement value>/g'
```

Cheers Apple...

## What does it do?

This command searches a directory for files with contents matching a certain string, then replaces the string using a regex substitution.

`grep` searches file contents and outputs matches to the terminal.

The `-l` flag tells it to only output the file name if a match occurs, not every line where a match is found. The `-r` command, in combination with the path in the final position in the arguments list, tells Grep to search **r**ecursively.

`sed`, or **S**tream **Ed**itor is a core Unix tool for... editing streams. It can also be used to edit files in-place, as we're doing here. `-i` tells the interpreter to execute the following command against every line in a file.

`xargs` is a hugely powerful and useful Unix tool for supplying the output from one command to an arbitrary number of commands. In this case, each line of output from `grep` is being piped into xargs, which then runs a `sed` command for each; it's the same command, just with the filename from `grep` at the end.

## It's slow — how can I speed it up?

There's a good chance the recursive `grep` is traversing more directories than it needs to.

You can be more specific with your path, or you can use the `--exclude-dir <some big dir>` option to skip a directory.

```bash
grep -lr '<search pattern>' --exclude-dir node_modules --exclude_dir __tests__ ./some/path/specifically | # ...

```
