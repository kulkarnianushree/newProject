import React, { useState } from "react";
import Movies from "./component/Movies";
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovieHandler = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://swapi.dev/api/films');
            const data = await response.json();
            const TransformedData = data.results.map(moviedata => {
                return {
                    id: moviedata.episode_id,
                    title: moviedata.title,
                    releaseDate: moviedata.release_date
                };
            });
            setMovies(TransformedData);
            setIsLoading(false)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <React.Fragment>
            <div className="box">
                <button className="button" onClick={fetchMovieHandler}>Fetch Movies</button>
            </div>
            <div>
                {!isLoading && <Movies movie={movies} />}
            </div>
            {isLoading && <p> Loading...</p>}
        </React.Fragment>
    );
};

export default App;
