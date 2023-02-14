import { InternalPathNode, PathTree } from '@interfaces';

function parse<T>(nodes: InternalPathNode<T>[], currentTree: PathTree<T>): PathTree<T> {
    for (const node of nodes) {
        if (node.path === currentTree.self) {
            currentTree.payload = node.payload;
        }
    }

    return {} as PathTree<T>;
}

export default parse;