import React from "react";
import MovieCard from "../MovieCard/MovieCard";
const MovieList = ({ MovieFiltred }) => {
    return (
        <div>
            {MovieFiltred.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />;
            })}
        </div>
    );
};

export default MovieList;
