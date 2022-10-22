import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";


export default function SearchResults(props) {

    if (props.info){
    return (
        <div className="searchResults">
            <section>
            <h2>{props.info.word}</h2>

        <div className="phonetics-audio"><a href={props.info.phonetics[0].audio} target="_blank" rel="noreferrer">Pronounciation</a></div>
        <div className="phonetics-text">{props.info.phonetics[0].text}</div>
        </section>


 {props.info.meanings.map(function(
                meanings, index
            ){
            return (<div key={index}>
<Meanings info={meanings}/>
            </div>
                )}
            )}

        </div>)
    }
    else {
        return (null);
    }
}