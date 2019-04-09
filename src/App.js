import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        searchTerm: ""
    };

    onSearchFieldChange = e => {
        this.setState({ searchTerm: e.target.value });
    };
    render() {
        return (
            <div className="App">
                <Navbar />
                <SearchArea onSearchFieldChange={this.onSearchFieldChange} />
            </div>
        );
    }
}

export default App;
