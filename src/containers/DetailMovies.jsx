import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import tmdb from "../apis/tmdb";
import { Box, Typography } from "@mui/material";
import CardDetailMovie from "../components/CardDetailMovie";
import NavBar from "../components/NavBar";

const DetailMovies = () => {
    let params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchDataMovies = async () => {
        try {
            const responseDariTMDB = await tmdb.get(
            "/movie/"+params.id
            );
            setMovies(responseDariTMDB.data);
        } catch (err) {
            console.log(err);
        }
        };

        fetchDataMovies();
    }, [params]);

    return (
        <div className="App">
            <NavBar />
            <Box className="boxy">
            <Typography variant="h5">Detail Movies</Typography>
                <CardDetailMovie movie={movies} key={movies.id}/>
            </Box>
        </div>
    );
}

export default DetailMovies;