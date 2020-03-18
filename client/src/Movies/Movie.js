import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = (props) => {
    console.log(props);
    console.log(props.addToSavedList);
    const [movie, setMovie] = useState();

    useEffect(() => {
        const id = props.match.params.id;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then((response) => {
                //console.log(response);
                setMovie(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [props.match.params.id]);

    // Uncomment this only when you have moved on to the stretch goals
    const saveMovie = () => {
        const addToSavedList = props.addToSavedList;
        addToSavedList(movie);
    };

    if (!movie) {
        return <div>Loading movie information...</div>;
    }

    const { id, title, director, metascore, stars } = movie;

    return (
        <div className="save-wrapper">
            <MovieCard
                key={id}
                title={title}
                director={director}
                metascore={metascore}
                stars={stars}
            />
            <div className="save-button" onClick={saveMovie}>
                Save
            </div>
        </div>
    );
};

export default Movie;
