const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
var command = argv._[0];
console.log(command);
console.log('Process', process.argv);
console.log('yargs', argv)


if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Note aded');
        notes.logNote(note);
    } else {
        console.log("note title taken")
    }
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'remove'){
    var note_title = argv.title
    var noteRemoved = notes.removeNote(note_title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message)
} else if (command === 'read'){
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Note found')
        notes.logNote(note);
    } else {
        console.log('note not found')
    }
} else {
    console.log('command not recognised')
}