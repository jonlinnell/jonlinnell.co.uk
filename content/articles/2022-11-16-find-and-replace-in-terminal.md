---
title: How to recursively find-and-replace in the Terminal
date: 2022-11-16T10:00:00.000Z
keywords: unix
heroimage: /blog/images/testimage.png
---

IDEs and text editors usually give us a quick and easy find-and-replace function. If, like me, you're a masochist who uses things like Vim and spends lots of time staring at command prompts, it might seem as though such ease isn't something we deserve.

Fortunately, that's not the case. The solution devides nicely into two steps:

```bash
grep -lr '<phrase or regex to match>' ./some/path | xargs perl -pi -e 's/<regex to match>/<replacement value>/g'
```

## What does it do?

This command searches a directory for files with contents matching a certain string, then replaces the string using a regex substitution.

`grep` searches file contents and outputs matches to the terminal. If you're using some spicier regex, try adding the `-P` flag, which forces grep to interpret the expression as a PCRE (Perl-compatible regular expression.) 

The `-l` flag tells it to only output the file name if a match occurs, not every line where a match is found. The `-r` command, in combination with the path in the final position in the arguments list, tells Grep to search **r**ecursively.

`xargs` is a hugely powerful and useful Unix tool for supplying the output from one command to an arbitrary number of commands. In this case, each line of output from `grep` is being piped into xargs, which then runs a `perl` command for each; it's the same command, just with the filename from `grep` at the end.

`perl` is a scripting language much beloved of older Unix developers, and had an important part to play in the late-90s/early-2000s internet. In this case, we're simply using it to interpret a regex substitution on each line of a file. The `-p` flag essentially loops through a file evaluating a given command for each line of the file. The `-i` flag indicates that changes should be written to the file in-place. You can omit this flag to output to stdout and preview the results. `-e` is used to specify the exact Perl code to be executed.

## It's slow — how can I speed it up?

There's a good chance the recursive `grep` is traversing more directories than it needs to.

You can be more specific with your path, or you can use the `--exclude-dir <some big dir>` option to skip a directory.

```bash
grep -lr '<search pattern>' --exclude-dir node_modules --exclude_dir __tests__ ./some/path/specifically | # ...

```
