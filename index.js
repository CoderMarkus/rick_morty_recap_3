import searchQuery from "./components/search-bar/search-bar.js";

import { createCharacterCard } from "./components/card/card.js";
import createNavButton from "./components/nav-button/nav-button.js";
import createNavPagination from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
//const searchBarContainer = document.querySelector(
//  '[data-js="search-bar-container"]'
//);
//const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States

let page = 1;

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();

  const characters = data.results;
  const maxPage = data.info.pages;

  pagination.textContent = `${page} / ${maxPage}`;

  cardContainer.innerHTML = "";

  characters
    .map(createCharacterCard)
    .forEach((card) => cardContainer.append(card));
  console.log(characters);
}

fetchCharacters();

const prevButton = createNavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
  console.log(page);
});

const nextButton = createNavButton("next", () => {
  if (page >= 42) return;
  page++;
  fetchCharacters();
  console.log(page);
});

const pagination = createNavPagination();

navigation.append(prevButton, pagination, nextButton);
