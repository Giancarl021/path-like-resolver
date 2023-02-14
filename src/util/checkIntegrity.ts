import { PathNode } from '@interfaces';

export default function <T>(nodes: PathNode<T>[]) {
    const paths = nodes.map(node => node.path);
    const uniquePaths = paths.filter((path, index) => paths.indexOf(path) === index);

    if (uniquePaths.length !== paths.length) {
        throw new Error('Duplicate path found');
    }
}