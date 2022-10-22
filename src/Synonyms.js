import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
if (props.synonyms) {
    return (
        <span className="synonyms">

        {props.synonyms.map(function(
            synonyms, index
        ){
        return (<ul className="synonyms-list" key={index}>
<li>{synonyms}</li>
        </ul>
            )}
        )}
</span>
    ) }
    else {
        return (null)
    }
}