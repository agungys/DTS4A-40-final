import React from "react";
import {
  Box,
  Card,
  CardMedia
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardMovie = (props) => {
  const navigate = useNavigate();
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    // di sini kita menggunakan Component Card dari MUI
    <Card className="boxy" onClick={()=>navigate(`/detail/${props.movie.id}`)}>
      <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          alt={props.movie.title}
        ></CardMedia>
      </Box>
    </Card>
    
  );
};

export default CardMovie;
