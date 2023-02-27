import { InternalPathNode, PathTree } from '@interfaces';

function fillBranch<T>(currentTree: PathTree<T>, child: InternalPathNode<T>) {
    if (currentTree.self === child.path) {
        currentTree.payload = child.payload;
        return;
    }

    const directChild = child.parsedPath[0];

    if (!directChild) return;

    if (!currentTree.children[directChild]) {
        currentTree.children[directChild] = {
            self:
                currentTree.self +
                (currentTree.self === '/' ? directChild : ('/' + directChild)),
            children: {},
            payload: undefined
        };
    }

    const parsedChild = { ...child, parsedPath: child.parsedPath.slice(1) };

    fillBranch(currentTree.children[directChild], parsedChild);
}

export default function parse<T>(
    nodes: InternalPathNode<T>[],
    tree: PathTree<T>
): PathTree<T> {
    const sortedNodes = nodes.sort((a, b) => a.path.length - b.path.length);

    for (const node of sortedNodes) {
        fillBranch(tree, node);
    }

    return tree;
}
