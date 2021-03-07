import React from 'react';
import styled from "styled-components";
import { Card } from "./Card";


const CharacterCard = (props) => {
    return ( 
       
        <Card>
            <h1>Name: {props.name}</h1>
            <p>Stats:</p> 
            <p>Height: {props.height}</p> <p>Hair: {props.hair_color}</p> <p>Eyes: {props.eye_color}</p> <p>Birth Year: {props.birth_year}</p> <p>Gender: {props.gender}</p>
        </Card>
        
    )
}

export default CharacterCard;