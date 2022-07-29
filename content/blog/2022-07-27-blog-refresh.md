---
title: Blog Refresh
date: 2022-07-27T10:00:00.000Z
keywords: general
heroimage: /blog/images/testimage.png
---

In 2009, I started a blog for writing film reviews. It was, as was the trend at the time, a WordPress site hosted on some VPS somewhere. The reviews were a little tawdry and the kind of thing you'd expect someone to write when they're barely an adult and don't have a wealth of empathy to draw upon. Because try-hard edgelordiness was entirely acceptable in the late Naughties, I named it _User Unfriendly_.

When I set off for Africa on my Gap Year (pronounced _gap yah_), I repurposed the site for travel blogging, as a many-to-one method of updating family and friends to what I'd been up to. Looking back on the content now, I should have renamed it to _Smug White Tosser_.

It suffered the same fate when I worked in France during my undergrad, during which I basically blogged about cheese and being a bad teacher.

Now, eight years later, as a relatively stable adult in a relatively stable career — at which I'm not entirely useless, — I'm ditching the locally hosted MySQL database and butchered PHP backend of WordPress, and basking in the joyous developer experience of Next.js.

I've been finding myself in need of some sort of outlet for code tips, learning notes, music and film reviews of course, and maybe the odd travel article.

Naturally, this being the long-awaited **grand relaunch** (🎉), I'm expecting it to immediately be greeted with rapturous attention, and be a vital source of information without which my fellow engineers and lovers of the arts will be unable to live meaningful lives.

I added a Google Analytics tracker, but if I _ever_ see so much as a view, I will be more confused than elated.

Crucially, there will be code, so I'm leaving this block here as a little formatting test:

```ts
const test = "Hello I am Test!";

const add = (x) => (y) => x + y;

const add3 = add(3);

console.log(add3(5)); // => 7 (I think... needs a unit test.)

function stringifyRecord(obj: Record<string, any>): string {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => `${acc}${acc ? "," : ""}${key}=${JSON.stringify(value)}`,
    ""
  );
}
```
