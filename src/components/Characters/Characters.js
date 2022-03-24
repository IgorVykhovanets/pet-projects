import React, {useEffect, useState} from 'react';
import {charactersService} from "../../services/characters.service";
import Character from "../Character/Character";
import './characters.modules.css'

const Characters = ({person}) => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        charactersService.getAllEpisode(person).then(person => setCharacter([person]));
    },[])

    return (
        <div className={'characters-block'}>
            {character.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;