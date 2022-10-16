import React from "react";
import Meanings from "./Meanings";


export default function SearchResults(props) {

    if (props.info){
    return (
        <div className="Search-results">
            <h2>{props.info.word}</h2>

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