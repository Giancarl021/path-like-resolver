# Path-Like Resolver

![](assets/logo.svg)

Generate tree structure from a list of UNIX-like paths, with support for custom payloads.

## Why?

This package allows simple transformations on path lists to a tree structure, which can be used in a file explorer, for example. The package is very simple and lightweight, and it's written in TypeScript, allowing generics for payloads or no payloads at all.

## Installation

You can get this package on [NPM](https://www.npmjs.com/package/@giancarl021/path-like-resolver).

## Usage

### Importing

**CommonJS**

```ts
const resolver = require('@giancarl021/path-like-resolver');
```

**ESM**

```ts
import resolver from '@giancarl021/path-like-resolver';
```

### Function

The function receives one argument with the path list (`string` or `PathNode<T>`), and a type (TypeScript only) with the payload type, and returns a `PathTree<T>` type:

```ts
interface PathNode<T> {
    path: string;
    payload?: T;
}

interface PathTree<T> {
    self: string;
    payload?: T;
    children: Record<string, PathTree<T>>;
}

function resolver(pathList: string[]): PathTree<never>;
function resolver<T>(pathList: PathNode<T>[]): PathTree<T>;
function resolver<T>(pathList: (string | PathNode<T>)[]): PathTree<T>;
```

### Examples

**Without payloads**

```ts
const list = ['/a', 'b/c'];

const tree = resolver(list);

console.log(tree);
```

**Output**

```ts
const tree = {
    self: '/',
    payload: undefined,
    children: {
        a: {
            self: '/a',
            payload: undefined,
            children: {}
        },
        b: {
            self: '/b',
            payload: undefined,
            children: {
                c: {
                    self: '/b/c',
                    payload: undefined,
                    children: {}
                }
            }
        }
    }
};
```

**With payloads**

```ts
const list = [{
    path: '/a',
    payload: 'a'
}, {
    path: '/b/c',
    payload: 'c'
}];

const tree = resolver(list);

console.log(tree);
```

**Output**

```ts
const tree = {
    self: '/',
    payload: undefined,
    children: {
        a: {
            self: '/a',
            payload: 'a',
            children: {}
        },
        b: {
            self: '/b',
            payload: undefined,
            children: {
                c: {
                    self: '/b/c',
                    payload: 'c',
                    children: {}
                }
            }
        }
    }
};
```