import React, { useState,useEffect } from 'react'
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import  useStyles  from './styles';
import FlashLogo from '../../images/FlashLogo.jpg';
import FlashText from '../../images/FlashText.jpg';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';




const Navbar = () => {
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();

    const logout=()=> {
        dispatch({type:'LOGOUT'});

        history.push('/');
        sessionStorage.setItem("Display",false);
        setUser(null);
    };
    const displayPost=()=>{
        sessionStorage.setItem("Display",true);
        console.log("Button clicked")
        window.location.reload(false);
    }

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
        <img className={classes.image} src={FlashLogo} alt="icon" height="70px" width="70px" />&nbsp;&nbsp;
        <img component={Link} to="/" src={FlashText} alt="icon" height="60px" width="130px" />
       
        </Link>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar  className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>&nbsp;&nbsp;&nbsp;
                    <Typography className={classes.username} variant="h6" style={{width:"600px"}}>{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout}  color="primary" onClick={displayPost} style={{textTransform: "capitalize"}}>Post</Button>&nbsp;&nbsp;
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} style={{textTransform: "capitalize"}} >Logout</Button>
                </div>
            ):(
                <Button  component={Link} to="/auth" variant="contained" color="primary" style={{textTransform: "capitalize"}}>Sign In</Button>
            )}
        </Toolbar>
       
      </AppBar>
  )
}

export default Navbar