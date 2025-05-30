import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "e266cc8511b68b49c304aa6f6d51f5ce";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3/"}),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        }),
        getMovieById: builder.query({
            query: (id) => `movie/${id}?api_key=${API_KEY}&language=en-US&page=1`,
        }),
        getMovieNow: builder.query({
            query: () => `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        }),
        getMovieTop: builder.query({
            query: () => `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        }),
        getMovieByName: builder.query({
            query: (movieName) => `search/movie?api_key=${API_KEY}&query=${movieName}`,
        }),
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        getMovieByFilter: builder.query({
            query: ({ genre, rating, year }) => 
                `discover/movie?api_key=${API_KEY}&with_genres=${genre}&vote_average.gte=${rating}&primary_release_year=${year}`,
        }),
        
}),
})

export const {useGetPopularMoviesQuery, useGetMovieByIdQuery, useGetMovieNowQuery, useGetMovieTopQuery, useGetMovieByNameQuery, useGetGenresQuery, useGetMovieByFilterQuery} = moviesApi;