function loadPosts() {
    fetch('http://localhost:8080/posts')
    .then(response => {
       console.log('Status da resposta:', response.status);
       return response.json();
    })
    .then(posts => {
       console.log('Posts recebidos:', posts);
       const postsSection = document.getElementById('posts');
       postsSection.innerHTML = '';
       posts.forEach(post => {
         const postElement = document.createElement('div');
         postElement.className = 'post';
         postElement.innerHTML = `
           <h2>${post.title}</h2>
           <p>${post.content}</p>
           <h3>Comentários</h3>
           <div class="comments">
             ${post.comments.map(comment => `<p>${comment.content}</p>`).join('')}
           </div>
           <div class="comment-form">
             <textarea placeholder="Adicionar comentário" rows="2"></textarea>
             <button onclick="addComment(${post.ID}, this)">Comentar</button>
           </div>
         `;
         postsSection.appendChild(postElement);
       });
    })
    .catch(error => console.error('Erro ao carregar posts:', error));
   }

function addComment(postId, button) {
  const commentForm = button.closest('.comment-form');
  const textarea = commentForm.querySelector('textarea');
  const content = textarea.value.trim();
  if (content) {
    fetch('http://localhost:8080/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post_id: postId, content: content })
    })
    .then(response => response.json())
    .then(comment => {
      const commentsDiv = commentForm.previousElementSibling;
      commentsDiv.innerHTML += `<p>${comment.content}</p>`;
      textarea.value = '';
    })
    .catch(error => console.error('Erro ao adicionar comentário:', error));
  }
}

function createPost(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (title && content) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, content: content })
        })
        .then(response => response.json())
        .then(post => {
            loadPosts();
            document.getElementById('post-form').reset();
        })
        .catch(error => console.error('Erro ao criar post:', error));
    }
}

document.getElementById('post-form').addEventListener('submit', createPost);

document.addEventListener('DOMContentLoaded', loadPosts);
