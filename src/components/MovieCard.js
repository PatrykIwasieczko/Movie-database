import React from "react";

const Movie = props => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    {props.image == true ? (
                        <img
                            className=""
                            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                            alt="n"
                            style={{ width: "100%", height: 360 }}
                        />
                    ) : (
                        <img
                            className=""
                            src={`http://image.tmdb.org/t/p/w185${props.image}`}
                            alt="n"
                            style={{ width: "100%", height: 360 }}
                        />
                    )}
                </div>
                <div class="card-content">
                    <p>
                        <a href="#">View Details</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Movie;
