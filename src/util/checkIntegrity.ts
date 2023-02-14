import { InternalPathNode } from '@interfaces';

export default function <T>(nodes: InternalPathNode<T>[]) {
    const paths = nodes.map(node => node.path.trim());
    const uniquePaths = paths.filter(
        (path, index) => paths.indexOf(path) === index
    );

    for (const path of paths) {
        if (!path.startsWith('/')) throw new Error('Path must start with /');
    }

    if (uniquePaths.length !== paths.length) {
        throw new Error('Duplicate path found');
    }
}
