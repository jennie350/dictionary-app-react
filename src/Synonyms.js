import React from "react";

export default function Synonyms(props){
if (props.data.synonyms) {
    return (
        <div className="synonyms">

        {props.data.synonyms.map(function(
            synonyms, index
        ){
        return (<ul key={index}>
<li>{synonyms}</li>
        </ul>
            )}
        )}
</div>
    ) }
    else {
        return (null)
    }
}