import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";
import Phonetics from "./Phonetics";


export default function SearchResults(props) {

    if (props.info){
    return (
        <div className="searchResults">
            <section>
            <h2>{props.info.word}</h2>
<Phonetics phonetics={props.info.phonetics}/>

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