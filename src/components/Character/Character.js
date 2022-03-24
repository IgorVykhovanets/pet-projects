import React from 'react';
import {Link} from "react-router-dom";
import './character.modules.css'

const Character = ({character}) => {

    const {name, status, species, image,gender} = character;

    return (
        <div>
            <div className={'character-img'}><img src={image} alt={name}/></div>
            <div className={'character-title-name'}>
                <h2>{name}</h2>
                <div>Gender: {gender}</div>
            </div>
            <div className={'description-character-block'}>
                <div>Status: {status}</div>
                <div>Species: {species}</div>
                <div className={'button-detail'}>
                    <Link to={`${name}`} state={character}>{name}</Link>
                </div>
            </div>
        </div>
    );
};

export default Character;