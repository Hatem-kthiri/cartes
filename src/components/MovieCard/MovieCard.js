import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.posterUrl} alt="" />
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
            <Link to={`/movieDescription/123456789`}>View More</Link>
        </div>
    );
};

export default MovieCard;
