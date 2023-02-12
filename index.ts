import normalize from './src/util/normalize';
import { PathNode, PathTree } from './src/interfaces';

function main(pathList: string[]): PathTree<never>;
function main<T>(pathList: PathNode<T>[]): PathTree<T>;

function main<T>(pathList: string[] | PathNode<T>[]) {
    const tree: PathTree<T> = {
        self: '/',
        children: {}
    };

    const _list = normalize(pathList);

    for (const path of _list) {
    }

    return tree;
}

export = main;
