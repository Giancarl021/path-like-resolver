import PathTree from './src/interfaces/PathTree';
import { test, expect } from '@jest/globals';

import resolver from './index';

test('Instance check', () => {
    expect(resolver).toBeInstanceOf(Function);
});

test('Empty resolve', () => {
    const emptyTree: PathTree<never> = {
        self: '/',
        children: {}
    };

    expect(resolver([])).toEqual(emptyTree);
});

test('Invalid resolves', () => {
    expect(() => resolver(['a', 'b', 'c'])).toThrowError(
        new Error('Path must start with /')
    );

    expect(() => resolver(['/', '/'])).toThrowError(
        new Error('Duplicate path found')
    );
});

test('Valid resolves', () => {
    const simpleTree: PathTree<never> = {
        self: '/',
        children: {
            a: {
                self: '/a',
                children: {}
            },
            b: {
                self: '/b',
                children: {
                    c: {
                        self: '/b/c',
                        children: {}
                    }
                }
            }
        }
    };

    const complexTree: PathTree<number> = {
        self: '/',
        payload: 0,
        children: {
            a: {
                self: '/a',
                payload: 1,
                children: {}
            },
            b: {
                self: '/b',
                payload: 2,
                children: {
                    c: {
                        self: '/b/c',
                        payload: 3,
                        children: {}
                    }
                }
            }
        }
    };

    const simplePathList = ['/a', '/b/c'];
    const complexPathList = [
        {
            path: '/',
            payload: 0
        },
        {
            path: '/a',
            payload: 1
        },
        {
            path: '/b',
            payload: 2
        },
        {
            path: '/b/c',
            payload: 3
        }
    ];

    expect(resolver(simplePathList)).toEqual(simpleTree);

    expect(resolver(complexPathList)).toEqual(complexTree);
});

test('Collapsed resolves', () => {
    const simpleTree: PathTree<never> = {
        self: '/',
        children: {
            a: {
                self: '/a',
                children: {}
            },
            'b/c': {
                self: '/b/c',
                children: {}
            }
        }
    };

    const complexTree: PathTree<number> = {
        self: '/',
        payload: 0,
        children: {
            a: {
                self: '/a',
                payload: 1,
                children: {}
            },
            'b/c': {
                self: '/b/c',
                payload: 3,
                children: {}
            }
        }
    };

    const simplePathList = ['/a', '/b/c'];
    const complexPathList = [
        {
            path: '/',
            payload: 0
        },
        {
            path: '/a',
            payload: 1
        },
        {
            path: '/b',
            payload: undefined
        },
        {
            path: '/b/c',
            payload: 3
        }
    ];

    expect(resolver(simplePathList, true)).toEqual(simpleTree);

    expect(resolver(complexPathList, true)).toEqual(complexTree);
});

test('Vibe check', () => {});
