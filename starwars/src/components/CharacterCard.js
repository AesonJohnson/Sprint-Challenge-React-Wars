import React from "react";

const Character = props => {
    return(
        <div className="character">
            <h1>Name: {props.name}</h1>
            <h2>Birth_Year: {props.birth_year}</h2>
        </div>
    );
}

export default Character;