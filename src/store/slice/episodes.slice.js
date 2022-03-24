import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {episodesService} from "../../services/episodes.service";

export const getAllEpisodes = createAsyncThunk(
    'episodesSlice/getAllEpisodes',
    async (currentPage) => {
        try {
            let allEpisodes = episodesService.getAllCurrentPage(currentPage);
            return allEpisodes;
        } catch (e) {
            console.error(e)
        }
    }
);

export const getDetailsEpisode = createAsyncThunk(
    'episodesSlice/getDetailsEpisode',
    async (id) => {
        try {
            let detailsEpisode = episodesService.getDetailsPage(id);
            return detailsEpisode;
        } catch (e) {
            console.error(e)
        }
    }
);

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState: {
        episodes: [],
        detailEpisode: [],
        episode: []
    },
    extraReducers: {
        [getAllEpisodes.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllEpisodes.fulfilled]: (state, action) => {
            state.episodes = action.payload;
        },
        [getAllEpisodes.rejected]: (state, action) => {
            console.error(action.payload);
        },
        [getDetailsEpisode.pending]: (state, action) => {
            console.log('loading');
        },
        [getDetailsEpisode.fulfilled]: (state, action) => {
            state.detailEpisode = action.payload;
        },
        [getDetailsEpisode.rejected]: (state, action) => {
            console.error(action.payload);
        }
    }
});

export const episodesReducer = episodesSlice.reducer;