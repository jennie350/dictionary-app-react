import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css"

export default function Meanings(props) {


    return (
        <section className="Meanings">
            <h3>{props.info.partOfSpeech}</h3>
<p>{props.info.definitions[0].definition}
            </p>
            <p><em>
          {props.info.definitions[0].example}
            </em></p>
<Synonyms synonyms={props.info.synonyms}/>
        </section>
    )
}
