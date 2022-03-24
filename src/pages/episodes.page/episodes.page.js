import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllEpisodes} from "../../store/slice/episodes.slice";
import Episodes from "../../components/Episodes/Episodes";
import './episodes.page.modules.css'

const EpisodesPage = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEpisodes(page));
    } ,[page])

    const {episodes: {results, info}} = useSelector(state => state['episodesReducer']);

    const nextPage = (page) => {
        if (page >= 1 && page < info.pages) {
            setPage(page + 1);
        }
    };
    
    const prevPage = (page) => {
        if (page >= 2) {
            setPage(page - 1);
        }
    }

    return (
        <div>
            <div className={'pagination-episode-block'}>
                <div className={'pagination-button-block'}>
                    <button onClick={() => prevPage(page)}>PREV</button>
                </div>
                <div className={'block-page'}>{page}</div>
                <div className={'pagination-button-block'}>
                    <button onClick={() => nextPage(page)}>NEXT</button>
                </div>
            </div>
            <div className={'episodes-block'}>
                {results && results.map(episode => <Episodes key={episode.id} episode={episode}/>)}
            </div>
        </div>
    );
};

export default EpisodesPage;