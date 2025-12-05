# 📝 Notepad — Bloco de Notas Moderno (LocalStorage)

Um bloco de notas simples, rápido e responsivo, feito em **HTML, CSS e JavaScript**, com foco em:

- organização do código  
- modularidade  
- interface moderna  
- boa UX  
- facilidade para futura migração para **React** ou **Next.js**

Este projeto é ideal para estudos de frontend, padrões de arquitetura e boas práticas.

---

## 🚀 Funcionalidades Atuais

✔ Criar notas  
✔ Editar notas  
✔ Excluir notas  
✔ Interface limpa e responsiva  
✔ Notas armazenadas no **localStorage**  
✔ Layout modernizado  
✔ Estrutura modular de código  
✔ Modal de edição  
✔ Quebra de linha preservada  
✔ Layout em grid no desktop e coluna única no mobile  
✔ Logo/banner + favicon

---

## 📌 Recursos em Desenvolvimento

As próximas etapas já foram planejadas e serão adicionadas em commits organizados:

### 🔜 Etapa 3 — Modal Avançado + Confirmação de Exclusão  
- Novo modal de edição mais sofisticado  
- Modal personalizado para excluir notas  
- Animações e UX refinada  
- Fechar com ESC e clique externo  

### 🔜 Etapa 4 — Tema Escuro (Dark Mode)  
- Alternância Light/Dark  
- Persistência no localStorage  
- Transição suave  

### 🔜 Etapa 5 — Busca e Ordenação  
- Campo de busca por título / conteúdo  
- Ordenação:  
  - mais recentes  
  - mais antigas  
  - alfabética  
  - notas fixadas  

### 🔜 Etapa 6 — Segurança + Acessibilidade  
- Prevenção de XSS (substituir innerHTML por textContent)  
- aria-labels em botões  
- validação robusta ao salvar notas  
- melhoria do footer  
- focus-visible  
- try/catch no localStorage  
- alerta de alterações não salvas  

### 🔜 Etapa 7 — Auto-save  
- Salvamento automático com debounce de 1 segundo  

### 🔜 Etapa 8 — Exportar e Importar Notas  
- Exportar `.json`  
- Exportar `.txt`  
- Importar backup  

### 🔜 Etapa 9 — PWA (Offline + Instalável)  
- Service Worker  
- Manifest  
- App instalável no celular e desktop  

### 🔜 Etapa 10 — README Final Profissional  
- prints  
- badges  
- gif de demonstração  
- guia de contribuições  
- roadmap  

---

## 📁 Estrutura do Projeto

/index.html
/css/
style.css
/js/
script.js # inicialização e eventos
ui.js # renderização e interação visual
storage.js # salvar, carregar, editar, excluir
modal.js # lógica dos modais
theme.js # modo escuro (ainda vazio)
/assets/
logo.png
README.md


---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES Modules)**
- **LocalStorage**
- **Arquitetura modular (separação por responsabilidades)**

---

## ▶️ Como Rodar Localmente

Como o projeto utiliza **JavaScript Modules (type="module")**, NÃO funciona abrindo o arquivo direto no navegador.

Você precisa rodar um pequeno servidor local.

### 👉 Opção 1 — Python (mais fácil no Linux)
```bash
python3 -m http.server 8000

Depois abra:
http://localhost:8000
👉 Opção 2 — VS Code Live Server

    Instale a extensão Live Server

    Clique com botão direito no index.html

    “Open with Live Server”

👉 Opção 3 — npx serve (Node.js)

npx serve

💡 Objetivo do Projeto

Este projeto foi criado para:

    praticar frontend moderno

    aprender organização de UI

    trabalhar com estrutura modular em JavaScript

    evoluir para funcionalidades mais avançadas

    futuramente migrar para Next.js mantendo o mesmo design e lógica

👨‍💻 Autor

Eduardo José Martins Amaral
Desenvolvedor Full Stack em formação, estudante de Sistemas de Informação, focado em projetos reais, aprendizado prático e boas práticas de engenharia.
📄 Licença

Este projeto é livre para uso pessoal e estudos.
⭐ Roadmap (alto nível)

Estrutura modular

UI moderna

Modal avançado

Confirmação de exclusão customizada

Tema escuro

Busca e ordenação

Segurança e acessibilidade

Auto-save

Exportar / Importar

PWA
S
    README final com screenshots

🙌 Contribuições

Sugestões de melhorias são sempre bem-vindas!