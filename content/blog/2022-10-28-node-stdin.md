---
title: Piping data into a Node.js script
date: 2022-10-28T10:00:00.000Z
keywords: js
heroimage:
---

Most folks who work with in a terminal will be familar with this kind of incantation:

```sh
cat file.txt | pbcopy
```

In this example, we get the contents of file.txt and _pipe_ it to the clipboard (on macOS); we transfer the output of one command into the input of another.

This is a super-useful construct, and it's not unusual for \*nix nerds to pipe data from command to command to get what they need.

For some jobs, it's tempting to create a Node script to do the high-level processing of data in a pipeline. So how do we access that data getting piped our way?

## Reading stdin in Node.js

In Node.js, we can use the `process.stdin` Readable stream.

The older, more commonly found way to handle stdin data in Node is to use a `while` loop compiling data from stdin until it's empty.

```js
let data = "";

process.stdin.on("readable", () => {
  let chunk;
  while (null !== (chunk = process.stdin.read())) {
    data += chunk;
  }
});

process.stdin.on("end", () => {
  // process all the data and write it back to stdout
  process.stdout.write(data);
});
```

This is fine, but a little clunky. Thankfully, `process.stdin` implements an async iterator that makes this much easier to do.

```js
let data = "";

async function main() {
  for await (const chunk of process.stdin) data += chunk;

  // process all the data and write it back to stdout
  process.stdout.write(data);
}

main();
```

Much more concise.

You'll notice that once we're done with the processing, we write the output to `process.stdout`; this allows the data to be used in the next command, eg. `pbcopy` or `grep`.

Avoid `console.log()`, as it appends a newline.

## Reading data line-by-line

The `chunk` in the above example is usually a linear segment of bytes up to a certain arbitrary limit defined in the runtime. This isn't useful if we have a known line-by-line input coming into our app, say as an output from `grep`, or a file.

In this case, we can use the `readline` API available in Node.js, and hook up stdin as an input stream.

```js
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  // process a line at a time
  process.stdout.write(`Line: ${line.slice(0, 64)}...\n`);
});
```

The readline interface also implements an async iterator, so just as we did with the Readable stream above, we can refactor this to use a `for..of` loop:

```js
const readline = require("node:readline");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  for await (const line of rl) {
    process.stdout.write(`line: ${line}\n`);
  }
}

main();
```

Happy piping!
