import { parse, normalize, collapse as collapseTree } from '@services';
import { checkIntegrity } from '@util';
import { PathNode, PathTree } from '@interfaces';

export default function pathLikeResolver(
    pathList: string[],
    collapse?: boolean
): PathTree<never>;
export default function pathLikeResolver<T>(
    pathList: PathNode<T>[],
    collapse?: boolean
): PathTree<T>;

export default function pathLikeResolver<T>(
    pathList: string[] | PathNode<T>[],
    collapse: boolean = false
): PathTree<T> {
    const tree: PathTree<T> = {
        self: '/',
        payload: undefined,
        children: {}
    };

    const list = normalize(pathList);

    checkIntegrity(list);

    parse(list, tree);

    if (collapse) return collapseTree(tree);

    return tree;
}
