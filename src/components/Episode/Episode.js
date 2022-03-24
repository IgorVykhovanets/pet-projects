import React from 'react';

import './episode.modules.css'

const Episode = ({episode: {name}}) => {
    return (
        <div>
            <div className={'episode-name-block'}>{name} ,</div>
        </div>
    );
};

export default Episode;