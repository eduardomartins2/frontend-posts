import { loadNotes, saveNote, deleteNote } from "./storage.js";
import { renderNotes } from "./ui.js";
import { openModal, setupModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
    setupModal();

    const form = document.getElementById("post-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("post-title").value.trim();
        const content = document.getElementById("post-content").value.trim();

        if (!title || !content) return;

        saveNote(title, content);
        renderNotes();

        form.reset();
    });

    renderNotes();
});
