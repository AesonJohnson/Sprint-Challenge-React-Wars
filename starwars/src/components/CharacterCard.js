import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./Character";

function CharacterCard(){
    const [character, setCharacter] = useState([]);

    useEffect(() => {
      axios.get("https://swapi.co/api/people/1/")
        .then(response => {
          console.log(response);
          setCharacter(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }, []);

    return(
        <div className="charactercard">
            <CharacterCard 
            />
        </div>
    )
}

export default CharacterCard;