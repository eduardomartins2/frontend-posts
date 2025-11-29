import { loadNotes, deleteNote } from "./storage.js";
import { openModal } from "./modal.js";

export function renderNotes() {
    const container = document.getElementById("posts");
    container.innerHTML = "";

    const notes = loadNotes().sort((a, b) => b.id - a.id);

    notes.forEach(note => {
        const card = document.createElement("div");
        card.className = "post";

        card.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>

            <div class="post-buttons">
                <button class="edit-btn" data-id="${note.id}">Editar</button>
                <button class="delete-btn" data-id="${note.id}">Excluir</button>
            </div>
        `;

        // Botão editar
        card.querySelector(".edit-btn").addEventListener("click", () => {
            openModal(note);
        });

        // Botão excluir
        card.querySelector(".delete-btn").addEventListener("click", () => {
            if (confirm("Tem certeza que deseja excluir esta nota?")) {
                deleteNote(note.id);
                renderNotes();
            }
        });

        container.appendChild(card);
    });
}
