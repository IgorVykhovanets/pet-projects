import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {charactersService} from "../../services/characters.service";

export const getAllCharacters = createAsyncThunk(
    'charactersSlice/getAllCharacters',
    async (currentPage) => {
        try {
            let allCharacters = charactersService.getAll(currentPage);
            return allCharacters;
        } catch (e) {
            console.error(e)
        }
    }
);


const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState: {
        persons: []
    },
    extraReducers: {
        [getAllCharacters.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllCharacters.fulfilled]: (state, action) => {
            state.persons = action.payload;
        },
        [getAllCharacters.rejected]: (state, action) => {
            console.error(action.payload);
        }
    }
});

export const charactersReducer = charactersSlice.reducer;