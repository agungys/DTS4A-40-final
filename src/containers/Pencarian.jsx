import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import tmdb from "../apis/tmdb";
import { Box, Typography } from "@mui/material";
import CardDetailMovie from "../components/CardDetailMovie";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Pencarian = () => {
    let params = useParams();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchDataMovies = async () => {
        try {
            const responseDariTMDB = await tmdb.get(
            "/search/movie?query="+params.textcari
            );
            setMovies(responseDariTMDB.data.results);
        } catch (err) {
            console.log(err);
        }
        };

        fetchDataMovies();
    }, [params]);

    return(
        <div className="App">
            <NavBar />
            <Box className="boxy">
            <Typography variant="h5">Pencarian : {params.textcari}</Typography>
            {movies.map((movie) => {
                return <CardDetailMovie movie={movie} key={movie.id}/>;
            })}
            </Box>
            <Footer />
        </div>
    )
}

export default Pencarian;