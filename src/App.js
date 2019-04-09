import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        searchTerm: ""
    };
    render() {
        return (
            <div className="App">
                <Navbar />
                <SearchArea />
            </div>
        );
    }
}

export default App;
