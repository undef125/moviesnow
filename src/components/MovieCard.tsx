import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
// import * as puppeteer from 'puppeteer';

interface Props {
    movie: {
        Poster: string,
        Title: string,
        Type: string,
        Year: string,
        imdbID: string
    };
}

export const MovieCard = ({movie}: Props) => {

    const scrapToWatch = () => {
        toast.info("In development🙂", {autoClose: 2000,});
        <ToastContainer />
    //     (async () => {
    //         const browser = await puppeteer.launch({headless: false});
    //         const page = await browser.newPage();
    //         await page.goto("https://www.daraz.com.np/");
    //         await page.click('input[id="q"]');
    //         await page.type("#q", "mousepad", {delay: 0});
    //         await page.click('button[class="search-box__button--1oH7"][tabindex="2"]');
        
    //         // await browser.close();
    //     }) ();
    }

  return (
    <>
        <Card>
            <Card.Img variant="top" src={movie?.Poster}/>
            <Card.Body>
                <Card.Title>{movie?.Title}</Card.Title>
                <Card.Text>
                    {movie?.Type}
                    <br />  
                    {movie?.Year}
                </Card.Text>
                <Button variant="primary" onClick={() => scrapToWatch()}>Wath Movie</Button>
            </Card.Body>
        </Card>
    </>
  )
}