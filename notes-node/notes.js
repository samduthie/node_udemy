console.log("starting notes.js")
// console.log(module)

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.add = (add1, add2) => {
    return add1 + add2;
};