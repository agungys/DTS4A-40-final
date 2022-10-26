import React,{useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography,IconButton,InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from "react-router-dom";
import { keluarDariAplikasiKita } from "../authentication/firebase";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = () => {
    keluarDariAplikasiKita();
    navigate("/login");
  };
  const [cari, setCari] = useState({
    textcari: ""
  });

  const textFieldCariOnChangeHandler = (event) => {
    setCari({
      ...cari,textcari : event.target.value
    });
  };

  const textFieldCariOnKeyUp = (event)=>{
    if(event.key === 'Enter' ){
      event.preventDefault();
      navigate("/cari/"+cari.textcari);
    }
  }



  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ background: '#141414' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ background: '#141414' ,color:'#E01b1f'}}
          >
            MOVIES
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={textFieldCariOnChangeHandler}
              onKeyUp={textFieldCariOnKeyUp}
            />
          </Search>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
             Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
