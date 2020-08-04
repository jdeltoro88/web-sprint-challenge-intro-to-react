// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";





const C1 = styled.div`
   
    width: 30%;
    margin-left: 25%;
    margin: 30px auto 30px auto;
    border: 4px solid blue;
   

`;

const Name = styled.h2`
    font-size: 4rem;
    color: yellow;
    
    text-decoration: underline;
`;

const Date = styled.h3`
    font-size: 2rem;
`;

const Misc = styled.h4`
    font-size: 2rem;
    
`;
const Character = props => {
    return (
        <div>
                <C1 className="character1">
                    <Name>{props.character.name}</Name>
                    <Date> Birth Year: {props.character.birth_year}</Date>
                    <Misc>Height: {props.character.height}</Misc>
                    <Misc>Hair Color: {props.character.hair_color}</Misc>
                    <Misc>Skin Color: {props.character.skin_color}</Misc>
                </C1>
        </div>
    )


}

export default Character;