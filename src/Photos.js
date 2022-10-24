import React from "react";
import "./Photos.css";

export default function Photos(props) {

    if (props.photos) {
        return (

            <section className="photos">
<div className="row">
                {props.photos.map(function(photo, index) {
                return (

                    <div className="col-md-4 col-sm-6" key={index}>
            <img src={photo.src.landscape}  alt={photo.alt} className="img-fluid"/>
            </div> ) })}
            </div>
            </section>)
    }
    else {
        return null;
    }
}