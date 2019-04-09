import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        searchTerm: ""
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
    render() {
        return (
            <div className="App">
                <Navbar />
                <SearchArea
                    onSearchSubmit={this.onSearchSubmit}
                    onSearchFieldChange={this.onSearchFieldChange}
                />
            </div>
        );
    }
}

export default App;
