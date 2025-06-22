// protetores.js

window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const modal = document.createElement("div");
  modal.className = "modal hidden";
  document.body.appendChild(modal);

  const ongs = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];

  ongs.forEach((ong, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="image0.png" alt="ONG">
      <h3>${ong.nome}</h3>
      <button class="btn-localizacao" data-index="${index}">
        ONDE ESTAMOS? <img src="vector0.svg" alt="Seta">
      </button>
    `;
    cardsContainer.appendChild(card);
  });

  cardsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".btn-localizacao")) {
      const index = e.target.closest(".btn-localizacao").dataset.index;
      const ong = ongs[index];
      modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <h2>${ong.nome}</h2>
          <p><strong>Email:</strong> ${ong.email}</p>
          <p><strong>Telefone:</strong> ${ong.telefone}</p>
          <p><strong>Cidade:</strong> ${ong.cidade}</p>
          <p><strong>Endereço:</strong> ${ong.endereco}</p>
          <p><strong>CNPJ:</strong> ${ong.cnpj}</p>
          <p><strong>Missão:</strong> ${ong.missao}</p>
        </div>
      `;
      modal.classList.remove("hidden");
    }
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) {
      modal.classList.add("hidden");
    }
  });
});
// CSS para o modal
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "blog") {
    link.setAttribute("href", "blog/blog.html");
  }
});
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "quero adotar") {
    link.setAttribute("href", "catalogo.html");
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.cards');

  // Limpa os cards de exemplo (se houver)
  cardsContainer.innerHTML = '';

  // Carrega ONGs do localStorage
  const ongs = JSON.parse(localStorage.getItem('ongsPetMatch') || '[]');

  if (ongs.length === 0) {
    cardsContainer.innerHTML = '<p style="font-size:18px;">Nenhuma ONG cadastrada até o momento.</p>';
    return;
  }

  // Cria cada card dinamicamente
  ongs.forEach(ong => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = ong.foto || 'https://via.placeholder.com/286x240?text=Sem+Imagem';
    img.alt = ong.nome;

    const title = document.createElement('h3');
    title.textContent = ong.nome;

    const button = document.createElement('button');
    button.classList.add('btn-localizacao');
    button.innerHTML = `ONDE ESTAMOS? <img src="vector0.svg" alt="Seta">`;

    // (Opcional) Adicione ação ao botão "Onde Estamos?"
    button.addEventListener('click', () => {
      alert(`Esta ONG está localizada em: ${ong.cidade}`);
    });

    // Monta o card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    cardsContainer.appendChild(card);
  });
});

