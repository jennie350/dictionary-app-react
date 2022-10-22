import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {


    return (
        <div className="Meanings">
            <h3>{props.info.partOfSpeech}</h3>
<p>{props.info.definitions[0].definition}
            </p>
            <em>
          {props.info.definitions[0].example}
            </em>
<Synonyms synonyms={props.info.synonyms}/>
        </div>
    )
}
