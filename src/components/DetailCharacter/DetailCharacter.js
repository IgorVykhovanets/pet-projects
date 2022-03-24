import React from 'react';
import EpisodeCharacter from "../EpisodeCharacter/EpisodeCharacter";
import './detail.character.modules.css'

const DetailCharacter = ({person: {name, status, species, gender, image, episode}}) => {
    return (
        <div className={'detail-character-block'}>
            <div className={'character-title-block'}>
                <img src={image} alt=""/>
                <div className={'title-name-character'}>
                    <h2>{name}</h2>
                    <div>GENDER: {gender}</div>
                    <div>STATUS: {status}</div>
                    <div>SPECIES: {species}</div>
                </div>
                <div>
                    <div className={'episode-character-block'}><span>Episode:</span> {episode.map(episode => <EpisodeCharacter episode={episode}/>)}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailCharacter;