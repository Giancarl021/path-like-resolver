export function objectSize<T extends Record<any, any>>(object: T): number {
    return Object.keys(object).length;
}

export function objectFirstEntry<T extends Record<any, any>>(object: T) {
    return object[Object.keys(object)[0]];
}
