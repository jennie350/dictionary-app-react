import React from "react";
import "./Photos.css";

export default function Photos(props) {

    if (props.photos) {
        return (

            <section className="photos">
<div className="row">
                {props.photos.map(function(photo, index) {
                return (

                    <div className="col-4">
            <img src={photo.src.landscape} key={index} alt={photo.alt} className="img-fluid"/>
            </div> ) })}
            </div>
            </section>)
    }
    else {
        return null;
    }
}