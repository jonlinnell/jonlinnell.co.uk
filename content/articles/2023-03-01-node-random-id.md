---
title: How to generate random IDs in Node.js
date: 2023-03-01T10:00:00.000Z
keywords: js,ts
heroimage: /blog/images/testimage.png
---

I often need to generate random IDs for some reason or other, whether it's a unique non-sequential ID for a data store, a way of differentiating otherwise identical items in the DOM, or a cryptographically secure token.

The JS/TS ecosystem provides us with many tools to do this.

## UUIDs

A Unique Universal Identifier is a 32-digit code, recognisable by its 8-4-4-4-12 format. UUID v4, the most common random format, is a fully random ID that makes some bold claims about how unlikely a collision – two IDs being the same – is to occur. You can determine the 'version' of a UUID by looking at the first digit of the third block of the ID; you're most likely to see a 4.

Creating a UUID in Node.js is easy. There's the excellent, lightweight [node-uuid]() library that's been around for years, but (spoiler) there is an even easier way that I'll get to next.

```ts
import { v4 as uuid } from 'uuid';

const id = uuid();
// id => 'ddcace95-1db2-4a05-9249-d42e8c9c19a3'
```

As of Node 14-ish, the Node Crypto API exposes a function for generating v4 UUIDs:

```ts
import { randomUUID } from "node:crypto";

const id = randomUUID();
// id => 'ddcace95-1db2-4a05-9249-d42e8c9c19a3'
```

## Long random strings

UUIDs won't work for everything, especially if you're required to provide a single-use code for some authentication protocols, an initialisation vector, or some other cryptographically useful random code that needs to be a certain length and complexity.

At the root of a lot of these solutions is the `crypto.randomBytes` function, which provides pseudo-random data that can be used for cryptographic purposes.

We can then use the returned `Buffer` instance (essentially an array of 8-bit integers) to yield a useful string. For example:

### 32-digit hexadecimal

We can use the `randomBytes` function, along with some string processing functions as follows:

```ts
import { randomBytes } from "node:crypto";

const id = randomBytes(16).toString("hex");
// id => '4d79a9b797c69ee1a8c6d9fecf3f6a3b'
```

You can use this to generate strings of almost any length. You can also use a variety of encodings with the Buffer.toString() method, though the most useful are generally `hex` and `base64`/`base64url`.

```ts
const id = randomBytes(16).toString("base64url");
// id => 'eh7swNTsSu1euChfLea5Sw'
```

Bear in mind that the length of your final string and the number of bytes you generate are not the same. hexadecimal strings will require 2x the number of bytes (eg. 16 for a 32-digit string).

Base64 is slightly less predictable; although it theoretically encodes 6 bits per character, this leaves some remaindered bits which will require padding. If you require a base64 string of a certain length and don't want to do the maths (or want to avoid trailing padding characters,) you can request more bytes than necessary, then trim the excess:

```ts
const id = randomBytes(32).toString("base64url").slice(0, 32);
// id => 'uAomv50rGywlVmhzyAEpm5TkeWTSeinS'
```

## Hard Mode (JS built-ins only)

Let's say the Node Crypto library is not available, and we have to rely on JS built-in objects only. This method can be particularly useful in front-end contexts where the Node APIs are not available, and you wish to avoid importing additional libraries into your bundle.

Using the `Math.Random()` method, we can create random numbers between 0 and 1, which may not sound helpful at first, but we can coerce that number into a useful ID string by casting it as a hexatridecimal (a fancy word for base36) string and slicing off the leading `0.`:

```ts
const id = Math.random().toString(36).slice(2);
// id => jprznc7hjxg
```
