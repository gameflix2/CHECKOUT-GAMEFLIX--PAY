// Lista de jogos (exemplo)
const games = [
  {
    title: "Grand Theft Auto V",
    genre: "Ação",
    platform: "PC, PS5, Xbox",
    release: "2013",
    description: "Um jogo de mundo aberto que permite ao jogador viver a vida de criminosos em Los Santos.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    trailer: "https://www.youtube.com/watch?v=QkkoHAzjnUs"
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Aventura",
    platform: "PC, PS5, Xbox",
    release: "2018",
    description: "Explore o Velho Oeste em uma história épica de lealdade, traição e sobrevivência.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    trailer: "https://www.youtube.com/watch?v=eaW0tYpxyp0"
  },
  // Adicione os outros jogos aqui...
];

// Referências
const gameGrid = document.getElementById('gameGrid');
const searchInput = document.getElementById('search');
const genreFilter = document.getElementById('genreFilter');
const platformFilter = document.getElementById('platformFilter');
const modal = document.getElementById('gameModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalGenre = document.getElementById('modalGenre');
const modalPlatform = document.getElementById('modalPlatform');
const modalRelease = document.getElementById('modalRelease');
const modalDescription = document.getElementById('modalDescription');
const modalTrailer = document.getElementById('modalTrailer');
const closeModal = document.querySelector('.close');

// Função para renderizar jogos
function renderGames(gamesToRender) {
  gameGrid.innerHTML = '';
  gamesToRender.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="overlay">
        <h3>${game.title}</h3>
      </div>
    `;
    card.addEventListener('click', () => openModal(game));
    gameGrid.appendChild(card);
  });
}

// Abrir modal
function openModal(game) {
  modal.style.display = 'flex';
  modalImage.src = game.image;
  modalTitle.textContent = game.title;
  modalGenre.textContent = `Gênero: ${game.genre}`;
  modalPlatform.textContent = `Plataforma: ${game.platform}`;
  modalRelease.textContent = `Lançamento: ${game.release}`;
  modalDescription.textContent = game.description;
  modalTrailer.href = game.trailer;
}

// Fechar modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target == modal) modal.style.display = 'none';
});

// Filtros e busca
function filterGames() {
  const searchTerm = searchInput.value.toLowerCase();
  const genreTerm = genreFilter.value;
  const platformTerm = platformFilter.value;
  
  const filtered = games.filter(game => {
    return game.title.toLowerCase().includes(searchTerm) &&
           (genreTerm === "" || game.genre === genreTerm) &&
           (platformTerm === "" || game.platform.includes(platformTerm));
  });
  renderGames(filtered);
}

searchInput.addEventListener('input', filterGames);
genreFilter.addEventListener('change', filterGames);
platformFilter.addEventListener('change', filterGames);

// Inicial
renderGames(games);
