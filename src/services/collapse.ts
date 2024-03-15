import { PathTree } from '@interfaces';
import { objectFirstEntry, objectSize } from 'src/util/object';

export default function collapse<T>(originalTree: PathTree<T>): PathTree<T> {
    let root = originalTree;
    const toDelete: (keyof (typeof root)['children'])[] = [];

    console.log(root);
    if (
        typeof root.payload === 'undefined' &&
        objectSize(root.children) === 1
    ) {
        root = objectFirstEntry(originalTree.children);
    }

    for (const key in root.children) {
        const collapsedChild = collapse(root.children[key]);

        if (root.children[key] === collapsedChild) continue;

        root.children[collapsedChild.self.replace(root.self, '')] =
            collapsedChild;
        toDelete.push(key);
    }

    toDelete.forEach(key => delete root.children[key]);

    return root;
}
