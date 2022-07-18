import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth).then(()=>{
      localStorage.setItem("email","")
      localStorage.setItem("login",false)
      navigate("/login");
    }).catch((error)=>{
      console.log(error)
    })
   
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow:1,textAlign:'left'}}>
            Mood Meter
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
