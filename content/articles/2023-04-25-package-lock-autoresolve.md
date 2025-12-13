---
title: Resolving package-lock.json Merge Conflicts, Without the Tears
date: 2023-04-25T10:00:00.000Z
keywords: javascript
heroimage: /blog/images/testimage.png
---

If you've landed here from Google, and you're in an active merge-conflict crisis, [the solution is here](#solution).

Imagine being so close to getting a PR from a draft full of promise to something fit for the light of day, only to confronted with this:

`CONFLICT (content): Merge conflict in package-lock.json`

The category of 'auto-generated files' contains all the nightmare scenarios for merge conflicts; snapshots, lockfiles, any number of your favourite niche library's auto-generated junk, and there's a reason for that: they're not for humans.

## What is `package-lock.json`?

Skip this is you know, I'm not going to mansplain it if you don't want me to.

`package-lock.json` is a cast-iron record of which packages NPM should install. You might think that's `package.json`, and you'd be sort of right; you specify vaguely which version of a package to install in `package.json`, but that's not enough to guarantee a deterministic installation across all your dev machines, environments, CI, production and so on...

Most packages are installed with a version signature like this:

```json
{
  "dependencies": {
    "my-package": "^1.14.0"
  }
}
```

This indicates to NPM that it should install _any minor version after 1.14.0_, so if there's a `1.40.0`, without a lockfile, that's what NPM would install.

In theory, if all developers adhered to Semver, this wouldn't be a problem, but I feel like we can all chuckle at that idea and move on to ways of trying to mitigate developers paying for the mistakes of other developers.

The `package-lock.json` provides a robust record of what dependencies should be installed, often including checksums for added security. By using a lockfile, you can basically guarantee that each developer can deterministically create a similar environment.

So why does it change, and why do the conflicts emerge?

Let's say, for example, two developers are working on the same repository in their own isolated branches: branch A and branch B. Dev A in branch A intentionally bumps a package up to the latest version. Dev B in Branch B bumps another
