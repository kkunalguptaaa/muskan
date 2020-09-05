import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { green } from '@material-ui/core/colors';
import Navbar from './navbar';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px 2px',
    transform: 'scale(0.8)',
  },
    inputRoot: {
      color: 'inherit',
},
searchIcon: {
  padding:"auto",
  height: 'auto',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card style={{backgroundColor:"rgba(0,0,0,0.7)",color:"#fff",minHeight:"98vh",padding:"20px",marginLeft:"240px",marginTop:"50px"}} className={classes.root}>
          <Navbar/>
        <CardContent>
            <div>
                <Typography style={{fontSize:"30px"}} variant="h5" component="h2">
                {bull}{bull}{bull}Project{bull}Notes{bull}{bull}{bull}
                </Typography>
                <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                <br /><br />
            </div>
            <Card  style={{width:'100%',backgroundColor:"#205d76",color:'#fff',margin:"auto",fontWeight:'300',}}>
             <CardContent>
                <Typography><h2 style={{fontWeight:'300',fontSize:"26px"}}>Choose Color to write</h2></Typography>
                <CreateIcon color="secondary"/>
                <CreateIcon color=""/>
                <CreateIcon style={{ color: green[500] }}/>
                <CreateIcon color=""/>
                <CreateIcon color=""/>
                <br />
                <TextareaAutosize style={{width:'250px',height:"30px",borderRadius:"5px"}} rowsMin={0} placeholder="Start Writing" />
              </CardContent>
            </Card>
            <Card style={{width:"100%",display:'flex'}}>
             <CardContent style={{width:"100%",display:'flex'}}>
                <Card style={{width:'50%',backgroundColor:"#82cacd",color:'#fff'}}>
                    <CardContent>
                        <Typography><h2 style={{position:"relative",left:"30px",fontSize:"35px",fontWeight:'300',marginBottom:"0px"}}>Projects</h2></Typography>
                        <ul  style={{listStyle:"none",marginTop:'10px'}}>
                            <li style={{fontSize:'20px'}}>{bull} Pencil Stand</li>
                            <li style={{fontSize:'20px'}}>{bull} Doll making</li>
                            <li style={{fontSize:'20px'}}>{bull} Beautiful caps</li>
                            <li style={{fontSize:'20px'}}>{bull} Teasure Locker</li>
                            <li style={{fontSize:'20px'}}>{bull} Beautful Cards</li>
                        </ul>
                    </CardContent>
                </Card>  
                <Card  style={{width:'50%',backgroundColor:"#ffaaa8",color:'#fff'}}>
                    <CardContent  className="list">
                        <Typography><h2 style={{position:"relative",left:"20px",fontSize:"35px",fontWeight:'300',marginBottom:"0px"}}>Guide</h2></Typography>
                        <ul style={{listStyle:"none",marginTop:'0'}}>
                            <li style={{fontSize:'20px'}}>{bull} First cut the bottle.</li>
                            <li style={{fontSize:'20px'}}>{bull} Paste glue on it.</li>
                            <li style={{fontSize:'20px'}}>{bull} Wrap color paper on it </li>
                            <li style={{fontSize:'20px'}}>{bull} Color them.</li>
                            <li style={{fontSize:'20px'}}>{bull} Make designs on them.</li>
                        </ul>                        
                    </CardContent>
                </Card>  
              </CardContent>
            </Card>
      </CardContent>
    </Card>
  );
}