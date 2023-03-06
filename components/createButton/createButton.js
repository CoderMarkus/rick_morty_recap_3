// import { createNavButton }from "../nav-button/nav-button.js";
import { fetchCharacters } from "../../index.js";
// import { navigation } from "../../index.js";
// import { pagination } from "../../index.js";

export let page = 1;

function createNavButton(text, onClick) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  console.log("nav-button.js")
  return button;
}

export const prevButton = createNavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
  console.log(page);
});

export const nextButton = createNavButton("next", () => {
  if (page >= 42) return;
  page++;
  fetchCharacters();
  console.log(page);
});
