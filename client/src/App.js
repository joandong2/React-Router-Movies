import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";

import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie.js";

const App = () => {
    const [savedList, setSavedList] = useState([]);

    const addToSavedList = (movie) => {
        setSavedList([...savedList, movie]);
    };

    return (
        <div>
            <SavedList list={savedList} />
            {/* <div>Replace this Div with your Routes</div> */}
            <Route exact path="/" component={MovieList} />
            {/* <Route exact path="/movie/:id" component={Movie} /> */}
            <Route
                path="/movie/:id"
                render={(props) => (
                    <Movie {...props} addToSavedList={addToSavedList} />
                )}
            />
        </div>
    );
};

export default App;
