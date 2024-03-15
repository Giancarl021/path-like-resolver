import { InternalPathNode, PathNode } from '@interfaces';
import { splitPath } from '@util';

export default function normalize<T>(
    list: string[] | PathNode<T>[]
): InternalPathNode<T>[] {
    const nodes: PathNode<T>[] =
        typeof list[0] === 'string'
            ? list.map(
                  (p): PathNode<never> => ({
                      path: p as string
                  })
              )
            : (list as PathNode<T>[]);

    const parsedList = nodes.map(node => {
        const parsedPath = splitPath(node.path.trim());

        return {
            path: node.path,
            payload: node.payload,
            parsedPath
        };
    });

    return parsedList;
}
