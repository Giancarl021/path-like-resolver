import { InternalPathNode, PathTree } from '@interfaces';

export default function <T>(
    nodes: InternalPathNode<T>[],
    currentTree: PathTree<T>
): PathTree<T> {
    const sortedNodes = nodes.sort((a, b) => a.path.length - b.path.length);

    for (const node of sortedNodes) {
        if (!node.parsedPath.length) {
            currentTree.payload = node.payload;
        }

        
    }

    return {} as PathTree<T>;
}
