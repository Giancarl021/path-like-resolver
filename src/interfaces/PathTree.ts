interface PathTree<T> {
    self: string;
    payload?: T;
    children: Record<string, PathTree<T>>;
}

export default PathTree;