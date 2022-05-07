import { MovieCard } from "./MovieCard";
import { Spinner } from "react-bootstrap";
import { Dispatch,SetStateAction } from 'react';

interface Props {
    movies: any[];
    setName: Dispatch<SetStateAction<string>>;
}

export const MoviesList = ({ movies,setName }: Props) => {
    if (movies.length <= 0) {
        return (
            <div className="loaderContainer">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <div className="moviesList">
                {movies?.map((movie) => {
                    return (
                        <div className="movieCardHolder" key={movie.imdbID}>
                            <MovieCard movie={movie} setName={setName}/>
                        </div>
                    );
                })}
            </div>
        );
    }
};
