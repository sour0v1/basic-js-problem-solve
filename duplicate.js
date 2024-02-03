function unique(names) {
    const uniCric = [];
    for (let i of names) {
        if (uniCric.includes(i) === false) {
            uniCric.push(i);
        }
    }
    return uniCric;
}
const birany = ['Shakib', 'Tamim', 'Shakib', 'Liton', 'Shanto', 'Musfique', 'Shanto', 'Tamim'];
const result = unique(birany);
console.log(result);