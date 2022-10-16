import React, {useState } from "react";
import "./DictionarySearch.css"

export default function DictionarySearch() {
let [searchTerm, setSearchTerm] = useState(null);

function search(event){
    event.preventDefault();
    alert(`Searching for ${searchTerm}`)
}

function handleChange(event) {
    setSearchTerm(event.target.value);
}

    return (
        <div className="Dictionary-search">
            <form onSubmit={search}>
                <input type="search" onChange={handleChange} placeholder="Type a word to start 🔎"/>
            </form>
        </div>
    )
}