import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    selectedC:null,
    favorites:null,
    tropo:'cipolla',
    hasLoaded: false,
    filter: '',
    searchResults: [],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        reset: () => initialState,
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setPatate: (state, action) => {
            state.tropo = action.payload;
        },
        setSelectedC: (state, action) => {
            state.selectedC = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFavorites: (state, action) => {
            state.favorites = action.payload;
        },
        setHasLoaded: (state, action) => {
            state.hasLoaded = action.payload;
        },
    },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;