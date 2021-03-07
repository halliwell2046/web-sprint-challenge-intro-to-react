// Write your Character component here
import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import axios from 'axios'

import CharacterCard from "./CharacterCard"

export default function Character() {
    const [characters, setCharacters] = useState([]);

    useEffect (() => {
        axios
        .get(`http://swapi.dev/api/people/`)
        .then((res) => {
            console.log('Res: ', res);
            setCharacters(res.data.results);
        })
        .catch((err) => {
            console.log("An error occurred: ", err);
        });
    }, []);

    return (

        
        <Card>
            {characters.map((character) => {
                return (
                    <CharacterCard 
                    key={character.count}
                    name={character.name}
                    height={character.height} hair_color={character.hair_color} eye_color={character.eye_color} birth_year={character.birth_year} gender={character.gender}
                    />
                );
            })}
            </Card>
        
    );
}