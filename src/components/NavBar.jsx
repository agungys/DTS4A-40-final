import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import { keluarDariAplikasiKita } from "../authentication/firebase";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = () => {
    keluarDariAplikasiKita();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            Movies
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
