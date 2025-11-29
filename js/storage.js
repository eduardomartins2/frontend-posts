export function loadNotes() {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
}

export function saveAllNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

export function saveNote(title, content) {
    const notes = loadNotes();

    notes.push({
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString(),
        pinned: false,
    });

    saveAllNotes(notes);
}

export function deleteNote(id) {
    let notes = loadNotes();
    notes = notes.filter(n => n.id !== id);
    saveAllNotes(notes);
}

export function updateNote(id, newTitle, newContent) {
    const notes = loadNotes();

    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) {
        notes[index].title = newTitle;
        notes[index].content = newContent;
        notes[index].date = new Date().toISOString();
    }

    saveAllNotes(notes);
}
