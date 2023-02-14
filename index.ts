import { parse, normalize } from '@services';
import { checkIntegrity } from '@util';
import { PathNode, PathTree } from '@interfaces';

function main(pathList: string[]): PathTree<never>;
function main<T>(pathList: PathNode<T>[]): PathTree<T>;

function main<T>(pathList: string[] | PathNode<T>[]) {
    const tree: PathTree<T> = {
        self: '/',
        children: {}
    };

    const list = normalize(pathList);

    checkIntegrity(list);

    parse(list, tree);

    return tree;
}

export = main;
