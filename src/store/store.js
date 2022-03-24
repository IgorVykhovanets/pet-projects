import {configureStore} from "@reduxjs/toolkit";

import {episodesReducer} from "./slice/episodes.slice";
import {charactersReducer} from "./slice/characters.slice";

const store = configureStore({
    reducer: {
        episodesReducer,
        charactersReducer
    }
});

export default store;