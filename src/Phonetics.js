import React from "react";
import "./Phonetics.css";


export default function Phonetics(props)
    {
        if (props.phonetics) {
          const phonetic =
            props.phonetics.filter((phonetic) => phonetic.audio !== "")[0] ??
            null;

          return (
            <div className="Phonetics">
                <h4 className="phonetic">
                  {phonetic && (
                    <>
                      <a
                        href={phonetic.audio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="phonetic-url"
                      >
                     🔊 pronounciation
                      </a>
                      <br/>
                     <p>{phonetic.text}</p>
                    </>
                  )}
                </h4>
                </div>
          )
                  }
    }

