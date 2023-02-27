import { test, expect } from '@jest/globals';

import resolver from './index';

test('Instance check', () => {
    expect(resolver).toBeInstanceOf(Function);
});

test('Vibe check', () => {
    const t = (resolver([
        '/test',
        '/test/a/b/c',
        '/test/a/b/d',
    ]));

    console.dir(t, { depth: null });
});