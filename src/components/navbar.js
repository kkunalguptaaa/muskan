import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Route,NavLink  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(4),
      margin: 'auto',
      maxWidth: 900,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    }
  }));
export default  function Navbar(){
    const classes = useStyles();
    return(
    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
      <NavLink style={{color: "white"}} to="/muskan" exact>
           Muskan
        </NavLink>
      </Typography>
    </Toolbar>
  </AppBar>
  );
}