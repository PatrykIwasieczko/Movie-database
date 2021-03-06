import React from "react";
import MovieCard from "./MovieCard";

const MovieList = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {props.movies.map((movie, id) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                image={movie.poster_path}
                                onViewMovieDetails={props.onViewMovieDetails}
                                movieId={movie.id}
                                title={movie.title}
                                date={movie.release_date}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
