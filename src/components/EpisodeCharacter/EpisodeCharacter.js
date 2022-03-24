import React, {useEffect, useState} from 'react';
import {episodesService} from "../../services/episodes.service";
import Episode from "../Episode/Episode";

const EpisodeCharacter = ({episode}) => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodesService.getEpisode(episode).then(episode => setEpisodes(episode));
    },[])


    return (
        <div>
            <Episode episode={episodes}/>
        </div>
    );
};

export default EpisodeCharacter;