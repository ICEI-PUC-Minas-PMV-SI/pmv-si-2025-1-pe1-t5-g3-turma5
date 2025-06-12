// catalogo.js

// 1. Gera cada card com imagem, nome + símbolo de gênero e botão de redirecionamento
function criaPetCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pet-card');

  // mantém o ID para uso no redirecionamento
  card.dataset.id = pet.id;

  // foto do pet
  const img = document.createElement('img');
  img.src = pet.foto || 'placeholder.png';
  img.alt = pet.nome;
  card.appendChild(img);

  // container para nome + símbolo
  const info = document.createElement('div');
  info.classList.add('info-container');

  // nome
  const nomeEl = document.createElement('h3');
  nomeEl.textContent = pet.nome;
  info.appendChild(nomeEl);

  // símbolo de gênero
  const generoEl = document.createElement('span');
  generoEl.classList.add('genero');
  generoEl.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  info.appendChild(generoEl);

  card.appendChild(info);

  // botão "Quero adotar"
  const btnAdotar = document.createElement('button');
  btnAdotar.classList.add('btn-adotar');
  btnAdotar.textContent = 'Quero adotar';
  btnAdotar.addEventListener('click', () => {
    window.location.href = `pet-detalhes.html?id=${encodeURIComponent(pet.id)}`;
  });
  card.appendChild(btnAdotar);

  return card;
}

// 2. Renderiza todos os pets
function renderizaListaPets() {
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  const pets = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
  pets.forEach(pet => {
    container.appendChild(criaPetCard(pet));
  });
}

// 3. Filtrar pets
function filtrarPets() {
  const especie = document.getElementById('filtroEspecie').value;
  const porte   = document.getElementById('filtroPorte').value;
  const idade   = document.getElementById('filtroIdade').value;
  const genero  = document.getElementById('filtroGenero').value;
  const loc     = document.getElementById('filtroLocalizacao').value.trim().toLowerCase();
  const energia = document.getElementById('filtroEnergia').value;

  let cards = Array.from(document.querySelectorAll('.pet-card'));
  const filtrados = cards.filter(card => {
    if (especie && card.dataset.especie !== especie) return false;
    if (porte   && card.dataset.porte   !== porte)   return false;
    if (idade   && parseInt(card.dataset.idade) !== parseInt(idade)) return false;
    if (genero  && card.dataset.genero  !== genero) return false;
    if (loc     && !card.dataset.localizacao.toLowerCase().includes(loc)) return false;
    if (energia && card.dataset.energia !== energia) return false;
    return true;
  });

  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  filtrados.forEach(c => container.appendChild(c));
}

// 4. Conecta botões
document.getElementById('btnBuscar')?.addEventListener('click', filtrarPets);
document.getElementById('btnLimparFiltros')?.addEventListener('click', () => {
  ['filtroEspecie','filtroPorte','filtroIdade','filtroGenero','filtroLocalizacao','filtroEnergia']
    .forEach(id => document.getElementById(id).value = '');
  renderizaListaPets();
});

// 5. Inicia
window.addEventListener('DOMContentLoaded', renderizaListaPets);

