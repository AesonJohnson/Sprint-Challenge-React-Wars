import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width:400px;
  margin:0px auto;
  margin-bottom:50px;
  padding:20px;
  border:3px solid black;
  background-color: white;
`;

const StyledName = styled.h1`
  color:tomato;
`;

const StyledInfo = styled.h2`
  font-weight:normal;
`;

const Bold = styled.p`
  display:inline-block;
  margin:0px;
  font-weight:bold;

`


function Character(props) {
    return(
        <Styled>
            <StyledName>{props.name}</StyledName>
            <StyledInfo><Bold>Gender:</Bold> {props.gender}</StyledInfo>
            <StyledInfo><Bold>Birth Year:</Bold> {props.birth_year}</StyledInfo>
        </Styled>
    );
}

export default Character;



