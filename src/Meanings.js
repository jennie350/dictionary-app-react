import React from "react";

export default function Meanings(props) {
    console.log(props.info);
    return (
        <div className="Meanings">
            <h3>{props.info.partOfSpeech}</h3>
<p>{props.info.definitions[0].definition}
            </p>
            <em>
          {props.info.definitions[0].example}
            </em>
        </div>
    )
}
