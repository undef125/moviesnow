import React, { useState,Dispatch,SetStateAction } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './custoncss.css'

interface Props {
    search: (movieName: string) => Promise<void>;
    response: boolean;
    setresponse: Dispatch<SetStateAction<boolean>>;
}

export const HeadSearch = (props: Props) => {
    const [input, setInput] = useState("");
    return (
        <div className="headSection">
            <h3>MovieNow</h3>
            <div className="searchHolder">
                <Form.Control type="text" placeholder="Enter movie name" className="inputt" value={input} onChange={(e) => setInput(e.target.value)}/>
                <Button variant="outline-primary" onClick={() => {
                    props.search(`${input}`);
                    props.response === false ? toast.error("No Movie with such name😅", {
                        position: "top-right",
                        autoClose: 2000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                        }) : console.log("all good");
                    console.log(input);
                }}>Search</Button>
                <ToastContainer />
            </div>
        </div>
    );
};
