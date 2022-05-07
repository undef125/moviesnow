import React from 'react'

interface Props {
    movie: any;
}

export const MovDetTexts = ({movie}: Props) => {
    console.log(movie);
  return (
    <div className='textSectionHolder'>
        <p className='title'>{movie.Title}</p>
        <p className="plot">{movie.Plot}</p>
        <div className="det">
            <p>Type: {movie.Type}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Runtime: {movie.Runtime}</p>
        </div>
        <p className="actors">Actors: {movie.Actors}</p>
        <p className="actors">Country: {movie.Country}</p>
        <p className="actors">Director: {movie.Director}</p>
        <p className="actors">Rated: {movie.Rated}</p>
        <p className="actors">Writer: {movie.Writer}</p>
        <p className="actors">IMDB Rating: {movie.imdbRating}</p>
        <p className="actors">IMDB Votes: {movie.imdbVotes}</p>
    </div>
  )
}