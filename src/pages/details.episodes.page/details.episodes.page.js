import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDetailsEpisode} from "../../store/slice/episodes.slice";
import {useLocation} from "react-router-dom";
import DetailEpisode from "../../components/DetailEpisode/DetailEpisode";

const DetailsEpisodesPage = () => {

    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailsEpisode(state));
    } ,[])

    const {detailEpisode} = useSelector(state => state['episodesReducer']);

    return (
        <div>
            <DetailEpisode detail={detailEpisode}/>
        </div>
    );
};

export default DetailsEpisodesPage;