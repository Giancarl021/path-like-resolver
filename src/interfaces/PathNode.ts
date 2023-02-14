interface PathNode<T> {
    path: string;
    payload?: T;
}

export interface InternalPathNode<T> extends PathNode<T> {
    parsedPath: string[];
}

export default PathNode;