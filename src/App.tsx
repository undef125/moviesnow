import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { HeadSearch } from './components/HeadSearch';
import { MoviesList } from './components/MoviesList';

function App() {

  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState(false);

  const IMDB_API_KEY = "cf45b04";
  const API_URL = `http://www.omdbapi.com?apikey=${IMDB_API_KEY}`;

  const searchMovies = async(movieName: string) => {
    axios.get(`${API_URL}&s=${movieName}`)
      .then(res => {
        if(res.data.Response === "False") setResponse(false);
        else {
          setResponse(true);
          setMovies(res.data.Search);
        }
      })
      .catch(err => {
        alert(err);
      })
  }

  useEffect(() => {
    searchMovies("superman");
  });

  return (
    <div className="App">
        <HeadSearch search={searchMovies} response={response} setresponse={setResponse}/>
        <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
