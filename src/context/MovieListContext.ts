import { createContext, Dispatch, SetStateAction } from "react";
import { MovieList } from "../@types/MovieList";

export const MovieListContext = createContext<{
    movieList: MovieList,
    setMovieList: Dispatch<SetStateAction<MovieList>>
}>({
    movieList: [],
    setMovieList: () => {}
})