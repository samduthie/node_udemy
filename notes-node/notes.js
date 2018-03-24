console.log("starting notes.js")


var addNote = (title, body) => {
    console.log(title, body)
};

var getAll = () => {
    console.log('getting all notes');
};

var removeNote = (title) => {
    console.log('removing ', title)
};

var readNote = (title) => {
    console.log('reading ', title);
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote,
};
