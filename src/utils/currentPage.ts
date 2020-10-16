export default function currentPage(fileAbsolutePath: string) {
    const pathArray = fileAbsolutePath.split(/\//);
    return pathArray[pathArray.findIndex(e => e === 'content') + 1];
}