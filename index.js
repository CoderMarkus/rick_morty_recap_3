import searchInput from "./components/search-bar/search-bar.js";
import { createCharacterCard } from "./components/card/card.js";
import createNavPagination from "./components/nav-pagination/nav-pagination.js";
import { nextButton } from "./components/createButton/createButton.js";
import { prevButton } from "./components/createButton/createButton.js";
import { page } from "./components/createButton/createButton.js";
import { x } from "./components/search-bar/search-bar.js"; 
export const searchBar = document.querySelector('[data-js="search-bar"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
//const searchBarContainer = document.querySelector(
//  '[data-js="search-bar-container"]'
//);

export const navigation = document.querySelector('[data-js="navigation"]');
export const input = document.querySelector('[data-js="search-bar__input"]');
export const pagination = createNavPagination();
// States

let url = 'https://rickandmortyapi.com/api/character'

//const searchQuery = "";
export async function fetchCharacters() {
  const response = await fetch(
    url + `?page=${page}` + `&name=${x}`
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
navigation.append(prevButton, pagination, nextButton);
searchInput();