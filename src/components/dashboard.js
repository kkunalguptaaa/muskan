import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import NoteIcon from '@material-ui/icons/Note';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {Route,NavLink  } from "react-router-dom";
import "./dashboard.css";
const drawerWidth = 240;
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
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    heading: {
      margin: 'auto',
      display: 'block',
      color: '#FF1493',
      backgroundColor: '#A0D7D3'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  }));
export default function Dashboard() {

    const classes = useStyles();
    return(
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <NavLink to="/muskan/login" exact>
                <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Login " />
                </ListItem>
            </NavLink>
            <NavLink to="/muskan/signup" exact>
                <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Signup " />
                </ListItem>
            </NavLink>
            <NavLink to="/muskan" exact>
                <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home Section" />
                </ListItem>  
            </NavLink>
            <NavLink to="/muskan/planning" exact>
                <ListItem button>
                <ListItemIcon>
                    <NoteIcon />
                </ListItemIcon>
                <ListItemText primary="Planning Section" />
                </ListItem>  
            </NavLink>
            <NavLink to="/muskan/submission" exact>      
                <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Submission Section" />
                </ListItem>
            </NavLink>
            <NavLink to="/muskan/report" exact>
                <ListItem button>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Report Section" />
                </ListItem>
            </NavLink>
        </div>
    </Drawer>    
)};


