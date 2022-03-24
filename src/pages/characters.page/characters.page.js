import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters} from "../../store/slice/characters.slice";
import Character from "../../components/Character/Character";
import './characters.page.modules.css'

const CharactersPage = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters(currentPage));
    },[currentPage])

    const {persons: results} = useSelector(state => state['charactersReducer']);

    const nextPage = (currentPage) => {
        if (currentPage >= 1 && currentPage < results.info.pages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = (page) => {
        if (currentPage >= 2 && currentPage <= results.info.pages) {
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        <div>
            <div className={'button-menu-pagination'}>
                <div className={'pagination-button-block'}>
                    <button onClick={() => prevPage(currentPage)}>prev</button>
                </div>
                <div className={'block-page'}>{currentPage}</div>
                <div className={'pagination-button-block'}>
                    <button onClick={() => nextPage(currentPage)}>next</button>
                </div>
            </div>
            <div className={'all-characters-block'}>{results.results && results.results.map(person => <Character key={person.id}
                                                                              character={person}/>)}</div>
        </div>
    );
};

export default CharactersPage;