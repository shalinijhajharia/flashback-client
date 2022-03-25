import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import {verifyMail} from './apiCalls';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import Input from './Input';

const initialState = { email: '', token: '' };

const Verify = () => {

    const classes = useStyles();
    
    const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [form, setForm] = useState(initialState);
  const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
       
        const res = await verifyMail(form);
        console.log(res)
        if(res.success){
          alert("Password is reset")
        }
        else{
          alert("Sorry this email not found. Or incorrect OTP")
        }
    
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Reset Password</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="otp" label="OTP" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
             
            </>
           
          </Grid>
         
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{textTransform: "capitalize"}}>
            Verify
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
          <Link to='/auth' className={classes.fccbtn} >SignIn</Link>
          
        </form>
      </Paper>
    </Container>
  );
};

export default Verify;