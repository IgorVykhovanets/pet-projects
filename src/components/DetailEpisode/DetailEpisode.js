import React from 'react';
import Characters from "../Characters/Characters";
import './detail.episode.modules.css'

const DetailEpisode = ({detail: {air_date, name, characters}}) => {

    return (
        <div className={'episode-detail-block'}>
            <div className={'title-episode-detail'}>
                <div className={'title-name-episode'}><h2>{name}</h2></div>
                <div>{air_date}</div>
            </div>
            <div className={'character-block'}>{characters && characters.map(character => <Characters person={character}/>)}</div>
        </div>
    );
};

export default DetailEpisode;