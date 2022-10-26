
import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./PopularMovies.module.css";
import CardMovie from "../components/CardMovie";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/popular"
        );

        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <Box className="boxy" >
      <Typography variant="h5">Popular Movies</Typography>
      <Box sx={{ display: 'flex',overflowX: 'auto'}}>
      {movies.map((movie) => {
        return  <CardMovie movie={movie} key={movie.id} sx={{width:200}} />;
      })}
      </Box>
    </Box>
  );
};

export default PopularMovies;
