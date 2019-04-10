import React from "react";

const MovieDetails = props => {
    return (
        <div>
            <div className="container">
                <div
                    className="row"
                    onClick={props.onCloseMovieDetails}
                    style={{ cursor: "pointer", paddingTop: 50 }}
                >
                    <i class="fas fa-arrow-left" />
                    <span style={{ marginLeft: 10 }}>Go back</span>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        {props.currentMovie.poster_path == null ? (
                            <img
                                className=""
                                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                                alt={props.currentMovie.title}
                                style={{ width: "100%", height: 360 }}
                            />
                        ) : (
                            <img
                                className=""
                                src={`http://image.tmdb.org/t/p/w185${
                                    props.currentMovie.poster_path
                                }`}
                                alt={props.currentMovie.title}
                                style={{ width: "100%", height: 360 }}
                            />
                        )}
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container">
                            <h3>{props.currentMovie.title}</h3>
                            <p>
                                Release date: {props.currentMovie.release_date}
                            </p>
                            <p>
                                Average score: {props.currentMovie.vote_average}
                            </p>
                            <p>{props.currentMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
