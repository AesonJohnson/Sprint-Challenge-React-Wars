import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./components/CharacterCard";


const App = () => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/1/")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard />
    </div>
  );
}

export default App;
