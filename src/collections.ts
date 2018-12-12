export const cleanCollectionPath = (path:string | string[]): string => {
    if (typeof path === 'string') {
        const p = ('/' + path + '/').replace(/\/{2,}/,'/').split('/').filter(v=>!!v).join('/');
        return p || '/';
    } else {
        return cleanCollectionPath(path.join('/'));
    }
}

export const isCollectionPath = (path: string | string[]): boolean  => {
    const sections = cleanCollectionPath(path).split('/').length;
    return sections % 2 === 1;
}

export const isDocumentPath = (path: string | string[]): boolean => {
    const sections = cleanCollectionPath(path).split('/').length;
    return sections % 2 === 0;
}
