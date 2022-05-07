import {useState,useEffect} from 'react';
import axios from 'axios';
import { MovDetImage } from './MovDetImage';
import { MovDetTexts } from './MovDetTexts';

interface Movie {
  movie: string;
}

export const MovieDetail = ({movie}: Movie) => {

  const [data, setData] = useState<any>([]);

  const getMovieDetail = async() => {
      axios.get(`http://www.omdbapi.com?apikey=cf45b04&t=${movie}`)
      // axios.get(`http://www.omdbapi.com?apikey=cf45b04&t=blade`)
      .then(response => {
        // console.log(response);
        setData(response.data);
      });
    }
    
    useEffect(() => {
      getMovieDetail();
    }, []);
    console.log(data);
    return (
    <div className="movieDetailPage">
        <MovDetImage image={data.Poster}/>
        <MovDetTexts movie={data}/>
    </div>
  )
}