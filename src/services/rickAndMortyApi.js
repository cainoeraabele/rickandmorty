import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    endpoints: (builder) => ({
        charactersSearch: builder.query({
            query: (name) => `character/?name=${name}`,
        }),
        getAllCharacters: builder.query({
            query: (ids) => `character/${ids}`,
        }),
        getCharacters: builder.query({
            query: (page = 1) => `character/?page=${page}`,
        }),
        getEpisodeById: builder.query({
            query: (ids) => `episode/${ids}`,
        }),
    }),
});

export const {
    useCharactersSearchQuery,
    useGetAllCharactersQuery,
    useGetCharactersQuery,
    useGetEpisodeByIdQuery,
} = rickAndMortyApi;