import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./components/MovieDetail";
import { useState } from 'react';
function App() {
  const [currentMovieName, setCurrentMovieName] = useState("");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home setName={setCurrentMovieName}/>} />
                <Route path="/moviedetails" element={<MovieDetail movie={currentMovieName}/>} />
            </Routes>
        </Router>
    );
}

export default App;
