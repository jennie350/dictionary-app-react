import React, {useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./DictionarySearch.css"

export default function DictionarySearch() {
let [searchTerm, setSearchTerm] = useState(null);
let [result, Setresult] = useState(null);

function handleResponse(response){
    Setresult(response.data[0])
}

function search(event){
    event.preventDefault();
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleWordChange(event) {
    setSearchTerm(event.target.value);
}

    return (
        <div className="Dictionary-search">
            <form onSubmit={search}>
                <input type="search" onChange={handleWordChange} placeholder="Type a word to start 🔎"/>
            </form>
            <SearchResults info={result}/>
        </div>
    )
}