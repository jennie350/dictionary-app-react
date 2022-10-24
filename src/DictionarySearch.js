import React, {useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./DictionarySearch.css"

export default function DictionarySearch() {
let [searchTerm, setSearchTerm] = useState(null);
let [result, Setresult] = useState(null);
let [photos, setPhotos]= useState(null);

function handleResponse(response){
    Setresult(response.data[0])
}

function handlePexelResponse(response) {

    setPhotos(response.data.photos);
}

function search(event){
    event.preventDefault();
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);

    //image search documentation - https://www.pexels.com/api/documentation/#photos-search

    let pexelsApiKey = "563492ad6f917000010000017c28dad4587e43e79b90e4bcc49b67b6";
 let pexelsUrl=`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=12`;
 axios.get(pexelsUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelResponse)
}


function handleWordChange(event) {
    setSearchTerm(event.target.value);
}

    return (
        <div className="Dictionary-search">
            <form onSubmit={search}>
                <input type="search" onChange={handleWordChange} placeholder="Type a word to start 🔎"/>
            </form>
           <div className="suggestion">Suggestions: marmalade, radio, snuggle...</div>
            <SearchResults info={result}/>
            <Photos photos={photos}/>
        </div>
    )
}