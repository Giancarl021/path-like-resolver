import { PathNode } from '../interfaces';

export default function <T>(input: string[] | PathNode<T>[]): PathNode<T>[] {
    const output: PathNode<T>[] =
        typeof input[0] === 'string'
            ? input.map(
                  (p): PathNode<never> => ({
                      path: p as string
                  })
              )
            : (input as PathNode<T>[]);

    return output;
}
