import PathNode from './src/interfaces/PathNode';
import PathTree from './src/interfaces/PathTree';

function main<T = never>(pathList: string[]): void;
function main<T>(pathList: PathNode<T>[]): void;

function main<T>(pathList: string[] | PathNode<T>[]) {
    const tree: PathTree<T> = {
        self: '/',
        children: {}
    };

    const _list: PathNode<T>[] =
        typeof pathList[0] === 'string'
            ? pathList.map(
                  (p): PathNode<never> => ({
                      path: p as string
                  })
              )
            : (pathList as PathNode<T>[]);

    for (const path of _list) {
    }
}

export = main;
