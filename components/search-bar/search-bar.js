import { searchBar } from "../../index.js"
import { input } from "../../index.js"


export default function searchQuery () {
    console.clear();
    searchBar.addEventListener("submit", (event) => {
        event.preventDefault();
    const inputvalue = input.value;
    console.log('sq', inputvalue)
    return inputvalue;
    });
    }
