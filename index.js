const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=<pageIndex>"
  );
  const data = await response.json();
  return data;
}

prevButton = createNavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
});

nextButton = createNavButton("next", () => {
  if (page >= 1) return;
  page++;
  fetchCharacters();
});

pagination = createPagination();

navigation.append(prevButton, pagination, nextButton);
pagination.textContent = `${page} / ${maxPage}`;
