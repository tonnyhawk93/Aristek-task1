export const groupBy = (arr, key) => {
    if(!key) return new Error('Some argument is not provided!');
    const result = Object.create(null);
    for(const el of arr) {
        const group = el[key];
        if(!group) continue;
        result[group] ?
            result[group].push(el) :
            result[group] = [el]
    }
    return result;
}