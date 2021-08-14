const yargs = require('yargs')
const notes = require('./notes')
// ....................add student
yargs.command({
    command: "add",
    describe: "Add notes",
    // .......................Options
    builder: {
        id: {
            describe: 'the student id',
            demandOption: true,
            type: 'number'
        },
        nameSt: {
            describe: 'the student name',
            demandOption: true,
            type: 'string'
        },
        grade: {
            describe: 'the student Grade',
            demandOption: true,
            type: 'number'
        },
        comment: {
            describe: 'write any comment',
            demandOption: false,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.addNote(argv.id, argv.nameSt, argv.grade, argv.comment)
    },
});
//............................delete student
yargs.command({
    command: 'delete',
    describe: 'delete notes',
    builder: {
        id: {
            describe: 'the student id',
            demandOption: true,
            type: 'number'
        }
    },
    handelar: (argv) => {
        note.removeNote(argv.id)
    },

});
//....................read 
yargs.command({
    command: "read",
    describe: "Read notes",
    builder: {
        id: {
            describe: 'the student id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.id)
    },
});


yargs.command({
    command: "list",
    describe: "List note",
    handler: (argv) => {
        notes.listNode(argv.id)
    },
});


yargs.parse()