import React from "react";
import MovieList from "../MovieList/MovieList";
const Filter = ({ MovieData, search }) => {
    const MovieFiltred = MovieData.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <MovieList MovieFiltred={MovieFiltred} />
        </div>
    );
};

export default Filter;
