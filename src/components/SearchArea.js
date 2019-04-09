import React from "react";

const SearchArea = () => {
    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className="input-field col s8 l4 offset-l3">
                        <input
                            id="searchMovie"
                            type="text"
                            className="validate"
                        />
                        <label htmlFor="searchMovie">Search movie</label>
                    </div>
                    <div className="input-field col s2">
                        <button
                            className="btn waves-effect waves-light red lighten-2"
                            type="submit"
                        >
                            Search<i class="material-icons right">search</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchArea;
