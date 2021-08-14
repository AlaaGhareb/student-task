const fs = require('fs')

// ............................addNote function


const addNote = (id, nameSt, grade, comment) => {
    const notes = loadNotes();

    const duplicateid = notes.filter((note) => {

        return note.id === id;
    });
    console.log(duplicateid);

    if (duplicateid.length === 0) {
        notes.push(

            {
                id: id,
                nameStudent: nameStudent,
                grade: grade,
                comment: comment
            }
        );
        saveNotes(notes);
        console.log("Saved Successfully");
    } else {
        console.log("Error Duplicate id");
    }
};

// .................removeNote Function
const removeNote = (id) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.id !== id
    })

    console.log(notesToKeep)
    saveNotes(notesToKeep)

}

// ....................load func
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

//................. saveNotes 
const saveNotes = (notes) => {
    const savedata = JSON.stringify(notes)
    fs.writeFileSync('notes.json', savedata)
}


// ..............................read 
const readNote = (id) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.id === id
    })
    console.log(note)
    if (note) {
        console.log(note)
        console.log(note.id)
        console.log(note.nameSt)
        console.log(note.grade)
    }
}

//...............list 
const listNode = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.id)

    });
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNode: listNode
}