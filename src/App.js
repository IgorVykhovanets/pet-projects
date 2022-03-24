import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import HomePage from "./pages/home.page/home.page";
import EpisodesPage from "./pages/episodes.page/episodes.page";
import CharactersPage from "./pages/characters.page/characters.page";
import DetailsEpisodesPage from "./pages/details.episodes.page/details.episodes.page";
import CharacterDetailsPage from "./pages/character.details.page/character.details.page";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'episodes/:id'} element={<DetailsEpisodesPage/>}/>
                    <Route path={'characters'} element={<CharactersPage/>}/>
                    <Route path={'characters/:name'} element={<CharacterDetailsPage/>}/>
                    <Route path={'episodes/:id/:name'} element={<CharacterDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;