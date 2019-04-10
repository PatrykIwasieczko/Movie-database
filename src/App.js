import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        searchTerm: "",
        currentMovie: null
    };

    onSearchSubmit = e => {
        e.preventDefault();
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=3721a53d7049a8d337b213c8bf5f49b2&query=${
                this.state.searchTerm
            }`
        )
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results] });
            });
    };

    onSearchFieldChange = e => {
        this.setState({ searchTerm: e.target.value });
    };

    onViewMovieDetails = id => {
        let filteredMovie;
        this.state.movies.forEach((movie, i) => {
            if (movie.id === id) {
                filteredMovie = movie;
            }
        });

        this.setState({ currentMovie: filteredMovie });
    };

    onCloseMovieDetails = () => {
        this.setState({ currentMovie: null });
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                {this.state.currentMovie == null ? (
                    <div>
                        <SearchArea
                            onSearchSubmit={this.onSearchSubmit}
                            onSearchFieldChange={this.onSearchFieldChange}
                        />
                        <MovieList
                            onViewMovieDetails={this.onViewMovieDetails}
                            movies={this.state.movies}
                        />
                    </div>
                ) : (
                    <MovieDetails
                        onCloseMovieDetails={this.onCloseMovieDetails}
                        currentMovie={this.state.currentMovie}
                    />
                )}
            </div>
        );
    }
}

export default App;
