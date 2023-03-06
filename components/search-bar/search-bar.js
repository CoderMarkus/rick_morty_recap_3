import { searchBar } from "../../index.js"
import { input } from "../../index.js"
import { fetchCharacters } from "../../index.js"
export let x = "";

export default function searchInput () {
    searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    x = input.value;
    console.log('sq', x);
    x = x.substring(0, x.length);
    console.log(x);
    fetchCharacters();
    });
}