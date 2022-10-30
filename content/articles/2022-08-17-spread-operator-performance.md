---
title: How slow is the Spread operator in JavaScript?
date: 2022-08-17T10:00:00.000Z
keywords: js
heroimage:
---

I was challenged on my use of the Spread operator in the return value of a reducer today. The colleague in question raised a concern over performance when spreading a potentially unknown number of elements, simply to add an element to that array.

Being the professional, mature adult that I am, I immediately set out to prove them wrong.

It was, of course, me who was wrong.

## TL;DR

It gets exponentially slower the more elements it has to cover.

`Array.concat()` is significantly more performant at scale than a spread-merge. Keep reading to find out how I tested this, and what else I covered along the way.

## What is the Spread operator?

It iterates iterables.

> What?

Basically, it expands an object (such as an array) into an available space.

Some (highly contrived) examples:

```js
// 1. Shallow-cloning an array;
const arr = [1, 2, 3, 4];

const clonedArr = [...arr];
// clonedArr now contains all the elements of arr, but is a brand new array.

// 2. Creating a object that inherits some but not all properties from another:
const person = {
  name: "Jon",
  age: 30,
  city: "London",
};

const personAfterHouseMove = {
  ...person,
  city: "Manchester",
};
// => { name: 'Jon', age: 30, city: 'Manchester' }

// 3. Expanding an array into the arguments of a function call:
const args = ["20", 10];

const number = parseInt(...args);
// => 20
```

We also use it _a lot_ for conditional merges in reducer return values. If you've ever written a Redux reducer to handle replacing an object from an array of objects by a specific property, this will look very familiar to you:

```js
const people = [
  { id: 1, name: "Safi" },
  { id: 2, name: "Francis" },
  { id: 3, name: "Sam" },
];

return [...people.filter((person) => person.id !== 2), { id: 2, name: "Fran" }];

// => [
//      { id: 1, name: "Safi" },
//      { id: 3, name: "Sam" },
//      { id: 2, name: "Fran" },
//    ];
```

In this example, we're returning a new array containing all items in `people` with the exception of item with id `2`, and a new item.

## So how slow is it?

Let's do some science and find out.

In this experiment, our aim is to combine two arrays of equal length into a new array.

To test this, we'll create the arrays and populate them with some random dummy data, start a stopwatch, then call a function that merges them. When that function has returned, we stop the stopwatch.

Here's the code we'll use:

```js
const arraySize = 64;

const randomString = () => (Math.random() * 1.2e17).toString(16);

// A little helper function to make the result of hrtime() a bit nicer to look at.
const hrtimeToMilliseconds = ([ms, ns]) => ms * 1e9 + ns / 1e6

function mergeArrays(a, b) {
  // Our implementation will go here
  // ...
}

// Create two arrays of size n (64 to start with) populated with random strings
const itemsA = [...new Array(arraySize)]
  .map(randomString);
const itemsB = [...new Array(arraySize)]
  .map(randomString);

// GO!
const start = process.hrtime());

mergeArrays(itemsA, itemsB);

const end = process.hrtime();

console.log(`${(hrtimeToMilliseconds(end) - hrtimeToMilliseconds(start)).toPrecision(4)}ms`);
```

### Control case

First, let's establish a control case: how long does it take `mergeArrays` to simply return all its arguments?

```js
function mergeArrays(a, b) {
  return [a, b];
}
```

Result: **0.03125ms**

So that's our control case, less than a tenth of a millisecond to return the values without operating on them.

### Spread

Let's try the spread operator first:

```js
function mergeArrays(a, b) {
  return [...a, ...b];
}
```

Result: **0.06892ms**

Clearly some computation going on there, but nothing indicating you should go away and refactor all your spread-merges just yet.

### `Array.concat()`

This function on the Array prototype allows you, as you'd expect, to add another array on to the end of an array, returning a new array.

You can read up on it on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

```js
function mergeArrays(a, b) {
  return a.concat(b);
}
```

Result: **0.05266ms**

Some folks will prefer calling the `concat` method on an empty array literal:

```js
function mergeArrays(a, b) {
  return [].concat(a, b);
}
```

Result: **0.05276ms**

This is perfectly valid and probably preferable, especially given there's basically no performance penalty.

One thing to consider is that in TypeScript, the interpreter does not know what kind of array you're defining, and infer a type of `never[]` to the array literal. This will cause it to trip over whatever you're `concat`'ing in. A solution to this is to lead the compiler by the nose:

```ts
function mergeArrays<T>(a: T[], b: T[]): T[] {
  return ([] as T[]).concat(a, b);
}
```

## Hang on a second...

This is nowhere near dramatic enough. If performance issues begin to reveal themselves at scale, then we need to adjust our methodology and crank up those numbers to get some actual results.

```js
const arraySize = 1e6; // 1,000,000.
```

That'll do it.

So now we're trying to join two arrays of a million elements each together. Let's start the test over.

### Spread (1million)

Result: **63.34ms**

Now we're talking — slow code!

63ms is fairly slow. I'd start to get nervous at this scale, given we're working in the region of millions of elements here.

### `Array.concat()` (1million)

Result: **9.833ms**

As different as day and night.

Both methods (calling `concat` on one of the target arrays, and calling it on an empty Array literal) yielded the same result.

That feels like a pretty clear winner to me, but, for the sake of argument, let's give a few other methods a go:

### The good ol' `for` loop (1million)

In this example, we use an incremented pointer to reference each index of the arrays and push them into the result array.

I toyed with using `var` in this example, for the true early JavaScript experience, but I just couldn't bring myself to do it.

```js
function mergeArrays(a, b) {
  const array = [];

  for (let i = 0; i < a.length; i++) array.push(a[i]);

  for (let i = 0; i < b.length; i++) array.push(b[i]);

  return array;
}
```

Result: **73.57ms**

The slowest yet. There are better ways of iterating arrays than this, so let's keep this one in the history books and not in our Git diffs.

### `for..of` iteration (1million)

Another `for` loop, but this time we're using the arrays' [built-in iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) to yield their values for the `array.push()`

```js
function mergeArrays(a, b) {
  const array = [];

  for (const item of a) array.push(item);

  for (const item of b) array.push(item);

  return a, b;
}
```

Result: **76.94ms**

Even slower.

Using the `for..of` method of iteration is extremely useful in some circumstances, but this isn't one of them.

### `Array.reduce()` (silly)

For the sake of argument (and to see if we can get into triple-digit milliseconds), let's implement a wildly inefficient reducer that merges these arrays one element at a time, spreading the previous results as we go to create new arrays on each iteration.

```js
function mergeArrays(...arrays) { // note the use of the spread operator here
  return arrays.reduce(
    (result, currentArray) => [
      ...result,
      currentArray.reduce(
        (innerResult, innerElement) => [...innerResult, innerElement],
        []
      ),
    ],
    []
  );
```

Result: **FAIL**

Our first failure! The limiting factor of my ever-waning patience caused this experiment to conclude without conclusion; the function never returned, and I killed the process after a minute or two.

I dropped the element count down to 100,000, still nothing (within the bounds of my patience).

At 10,000 elements per array, the function clocked in at an absolutely glacial **237ms**.

## The Finals

With the heats over, we have two competitors ready to go head-to-head.

`Array.concat()` has emerged as the best alternative to the all-too-easy spread-merge, but as we're examining the effect at scale, let's pit each method head-to-head and really dial up those numbers.

I'll try array lenghts of 10 through to 10,000,000 and compare the two.

Numbers are boring, so here's a graph of the results:

![A line graph comparing performance of Array.concat and spread-merge. The vertical axis is the number of records (from 10 to 10,000,000), the horizontal axis is the number of milliseconds elapsed while merging the arrays using the relevant method. Array.concat() is fastest by a wide margin; merging 20,000,000 elements in 99.69 milliseconds, a spread-merge took 465ms. {823x509}](/blog/images/array-performance.png)

Oh have the numbers anyway:

```
[items]         10    100   1000  10000  1e5    1e6    1e7
Spread-merge    0.03  0.03  0.09  1.00   11.75  64.09  465.20 [ms]
Array.concat()  0.03  0.03  0.03  0.19   0.94   9.84   99.69  [ms]
```

`Array.concat()` wins by a mile. 🥇

Both methods are level-pegging up to around 1000 elements, at which point a spread-merge begins to lag behind. But the real problems come when we get into five-digits.

By eight-digits, the difference is enormous; `Array.concat()` merged 20,000,000 items into the same array 365ms faster than a spread-merge.

## Why is it so much faster?

This is down to how these two methods process data under-the-hood.

I can't say for certain, and I'll be damned if I'm going to do any research that involves reading the native C++ implementation of Array prototype functions.

My semi-educated guess, given the disparity in timings we see, is that the spread operator is iterating one-by-one through each element, assigning each one to a new space in memory in sequence.

`Array.concat()`, however, I would expect to do some lower level memory manipulation to duplicate and stack the arrays next to each other. This would explain the very slight increase in time-complexity with increased elements; the number of elements matters to an extent, but isn't as big a dent in performance as iterating through every one of them.

## Conclusion

A spread-merge is probably fine when you're sure you're dealing with no more than a few thousand items, but if you want to make sure your application scales beyond that, give `Array.concat()` a try.
