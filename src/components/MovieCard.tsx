import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dispatch,SetStateAction } from 'react';

interface Props {
    movie: {
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
        imdbID: string;
    };
    setName: Dispatch<SetStateAction<string>>;
}

export const MovieCard = ({ movie,setName }: Props) => {
    // const navigate = useNavigate();

    // const routeChange = () => {
    //     let path = './MovieDetail';
    //     navigate(path);
    // }

    const scrapToWatch = () => {
        // toast.info("In development🙂", {autoClose: 2000,});
        // <ToastContainer />
        //     (async () => {
        //         const browser = await puppeteer.launch({headless: false});
        //         const page = await browser.newPage();
        //         await page.goto("https://www.daraz.com.np/");
        //         await page.click('input[id="q"]');
        //         await page.type("#q", "mousepad", {delay: 0});
        //         await page.click('button[class="search-box__button--1oH7"][tabindex="2"]');
        //          await browser.close();
        //     }) ();
    };

    return (
        <>
            <Card>
                <Card.Img variant="top" src={movie?.Poster} />
                <Card.Body>
                    <Card.Title>{movie?.Title}</Card.Title>
                    <Card.Text>
                        {movie?.Type}
                        <br />
                        {movie?.Year}
                    </Card.Text>
                    <Link to="/moviedetails">
                        <Button variant="primary" onClick={() => setName(movie.Title)}>See Detail</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};
