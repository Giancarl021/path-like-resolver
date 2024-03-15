const PATH_REGEX = /(\\|\/)+/;
const PATH_SEPARATORS = ['/', '\\'];

export default function splitPath(path: string) {
    const splittedPath = path.split(PATH_REGEX);

    const filteredPath = splittedPath.filter(
        part => Boolean(part) && !PATH_SEPARATORS.includes(part)
    );

    return filteredPath;
}
