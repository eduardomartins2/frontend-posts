// ---------------------------
// UTILITÁRIOS LOCALSTORAGE
// ---------------------------

function getPosts() {
    return JSON.parse(localStorage.getItem("posts") || "[]");
}

function savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
}

// ---------------------------
// CARREGAR POSTS
// ---------------------------

function loadPosts() {
    const postsSection = document.getElementById("posts");
    postsSection.innerHTML = "";

    const posts = getPosts();

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
            <h2>${post.title} ${post.edited ? "<span class='edit-tag'>(editado)</span>" : ""}</h2>
            <p>${post.content}</p>

            <div class="post-buttons">
                <button class="edit-btn" onclick="editPost(${index})">Editar</button>
                <button class="delete-btn" onclick="deletePost(${index})">Excluir</button>
            </div>

            <h3>Comentários</h3>
            <div class="comments">
                ${post.comments
                  .map((c, i) => `
                    <p>
                      • ${c}
                      <span class="delete-comment" onclick="deleteComment(${index}, ${i})">Excluir</span>
                    </p>
                `)
                .join("")}

            </div>

            <div class="comment-form">
                <textarea placeholder="Adicionar comentário..." rows="2"></textarea>
                <button onclick="addComment(${index}, this)">Comentar</button>
            </div>
        `;

        postsSection.appendChild(postElement);
    });
}

// ---------------------------
// CRIAR POST
// ---------------------------

function createPost(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();

    if (!title || !content) return;

    const posts = getPosts();

    posts.push({
        title,
        content,
        comments: [],
        edited: false
    });

    savePosts(posts);
    loadPosts();

    document.getElementById("post-form").reset();
}

document.getElementById("post-form").addEventListener("submit", createPost);

// ---------------------------
// ADICIONAR COMENTÁRIO
// ---------------------------

function addComment(postIndex, button) {
    const textarea = button.closest(".comment-form").querySelector("textarea");
    const text = textarea.value.trim();
    if (!text) return;

    const posts = getPosts();
    posts[postIndex].comments.push(text);

    savePosts(posts);

    textarea.value = "";
    loadPosts();
}

// ---------------------------
// EDITAR POST
// ---------------------------

function editPost(index) {
    const posts = getPosts();
    const post = posts[index];

    // Criar prompts simples
    const newTitle = prompt("Editar título:", post.title);
    if (newTitle === null) return;

    const newContent = prompt("Editar conteúdo:", post.content);
    if (newContent === null) return;

    post.title = newTitle.trim();
    post.content = newContent.trim();
    post.edited = true;

    savePosts(posts);
    loadPosts();
}

// ---------------------------
// EXCLUIR Posts
// ---------------------------

function deletePost(index) {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;

    const posts = getPosts();
    posts.splice(index, 1); // remove o post do array

    savePosts(posts);
    loadPosts();
}

// ---------------------------
// EXCLUIR comentarios
// ---------------------------
function deleteComment(postIndex, commentIndex) {
    const posts = getPosts();

    posts[postIndex].comments.splice(commentIndex, 1);

    savePosts(posts);
    loadPosts();
}


document.addEventListener("DOMContentLoaded", loadPosts);
