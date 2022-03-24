import React from 'react';
import {Link} from "react-router-dom";

import './episode.modules.css'

const Episodes = ({episode: {name, air_date, episode,id}}) => {
    return (
        <div className={'episode-block'}>
            <div><h2>{name}</h2></div>
            <div className={'description-episode-block'}>
                <div>{air_date}</div>
            </div>
            <div className={'button-detail'}>
                <Link to={`${id}`} state={id}>DETAIL</Link>
            </div>
        </div>
    );
};

export default Episodes;