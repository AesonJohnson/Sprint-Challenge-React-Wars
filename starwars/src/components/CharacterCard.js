import React, {useState, useEffect} from "react";
import Character from "./Character";
import axios from "axios";

function CharacterCard() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
      axios.get("https://swapi.co/api/people")
        .then(response => {
          setCharacter(response.data.results)
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
                gender={card.gender}
                birth_year={card.birth_year}
                />) 
            })}
        </div>
    )
}

export default CharacterCard;
