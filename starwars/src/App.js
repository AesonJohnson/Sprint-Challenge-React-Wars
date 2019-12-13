import React from "react";
import "./App.css";
import styled from "styled-components";
import CharacterCard from "./components/CharacterCard";


const App = () => {
  return (

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard />
    </div>

  );
}

export default App;
