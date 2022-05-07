import { useEffect, useState,Dispatch,SetStateAction } from 'react';
import { HeadSearch } from './HeadSearch';
import { MoviesList } from './MoviesList';
// import { Footer } from './Footer';
import axios from 'axios';

interface Props {
  setName: Dispatch<SetStateAction<string>>;
}

export const Home = ({setName}: Props) => {
    const [movies, setMovies] = useState([]);
    const [response, setResponse] = useState(false);
  
    const IMDB_API_KEY = "cf45b04";
    const API_URL = `http://www.omdbapi.com?apikey=${IMDB_API_KEY}`;
  
    const searchMovies = async(movieName: string) => {
      axios.get(`${API_URL}&s=${movieName}`)
        .then(res => {
          if(res.data.Response === "False") {setResponse(false)}
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
    },[]);
  return (
    <>
        <HeadSearch search={searchMovies} response={response} setresponse={setResponse}/>
        <MoviesList movies={movies} setName={setName}/>
        {/* <Footer /> */}
    </>
  )
}