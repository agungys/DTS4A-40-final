
import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import { Box, Typography ,ImageList,ImageListItem,ImageListItemBar} from "@mui/material";
import "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [latestmovies, setLatestmovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [upcomingmovies, setUpcomingMovies] = useState([]);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    const fetchDataLatestMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/top_rated"
        );

        setLatestmovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataLatestMovies();
  }, []);
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

  useEffect(() => {
    const fetchDataUpComingMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/upcoming"
        );

        setUpcomingMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataUpComingMovies();
  }, []);

  return (
    <>
    <Box className="boxy" >
      <Typography variant="h5">Popular Movies</Typography>
      <Box sx={{ display: 'flex',overflowX: 'auto'}}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)"
          }}
        >
          {movies.map((movie) => (

            <ImageListItem key={`${movie.id}`}>
              <img src={`${baseUrlForMovie}${movie.poster_path}`} alt={`${movie.title}`} onClick={()=>navigate(`/detail/${movie.id}`)} />
              <ImageListItemBar title={movie.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
    <Box className="boxy" >
      <Typography variant="h5">Top Rated</Typography>
      <Box sx={{ display: 'flex',overflowX: 'auto'}}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)"
          }}
        >
          {latestmovies.map((latest) => (
            <ImageListItem key={`${latest.id}`}>
              <img src={`${baseUrlForMovie}${latest.poster_path}`} alt={`${latest.title}`} onClick={()=>navigate(`/detail/${latest.id}`)} />
              <ImageListItemBar title={latest.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
    <Box className="boxy" >
      <Typography variant="h5">UpComing Movies</Typography>
      <Box sx={{ display: 'flex',overflowX: 'auto'}}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)"
          }}
        >
          {upcomingmovies.map((movie) => (

            <ImageListItem key={`${movie.id}`}>
              <img src={`${baseUrlForMovie}${movie.poster_path}`} alt={`${movie.title}`} onClick={()=>navigate(`/detail/${movie.id}`)} />
              <ImageListItemBar title={movie.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
    </>
  );
};

export default HomePage;
