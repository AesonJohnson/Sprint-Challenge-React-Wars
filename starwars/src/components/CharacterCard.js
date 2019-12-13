import React, {useState, useEffect} from "react";
import Character from "./Character";
import axios from "axios";
import styled from "styled-components";


function CharacterCard() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
      axios.get("https://swapi.co/api/people")
        .then(response => {
          setCharacter(response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }, []);

    return(
        <div className="charactercard">
            {character.map((card, index) => {
                return(
                <Character
                key={index}
                name={card.name}
                birth_year={card.birth_year}
                />) 
            })}
        </div>
    )
}

export default CharacterCard;
