import { updateNote } from "./storage.js";
import { renderNotes } from "./ui.js";

let currentEditId = null;

export function setupModal() {
    // Botão salvar
    document.getElementById("save-edit-btn").addEventListener("click", () => {
        const title = document.getElementById("edit-title").value;
        const content = document.getElementById("edit-content").value;

        updateNote(currentEditId, title, content);
        closeModal();
        renderNotes();
    });

    // Botão fechar (X)
    document.getElementById("close-modal").addEventListener("click", () => {
        closeModal();
    });

    // Fechar clicando fora do modal
    window.addEventListener("click", (e) => {
        if (e.target.id === "editModal") closeModal();
    });
}

export function openModal(note) {
    currentEditId = note.id;

    document.getElementById("edit-title").value = note.title;
    document.getElementById("edit-content").value = note.content;

    document.getElementById("editModal").style.display = "block";
}

export function closeModal() {
    document.getElementById("editModal").style.display = "none";
}
