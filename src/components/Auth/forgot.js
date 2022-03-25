import React, { useState } from 'react';

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {sendMail} from './apiCalls';

import useStyles from './styles';
import Input from './Input';
import {Link} from 'react-router-dom';

const initialState = { email: '', password: '', confirmPassword: '' };
const Forgot = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    const [form, setForm] = useState(initialState);
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(form.password!==form.confirmPassword){
        alert("Password and Repeat Password does not match")
      }
      else{
    
          console.log(form)
          const res = await sendMail(form);
          if(res.success){
            alert("Please check your email. Don't forget to check Spam folder")
          }
          else{
            alert("Sorry this email not found")
          }
      }
      };



const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Forgot Password</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <>
            <Input name="email" label="Email Address"  type="email" handleChange={handleChange}/>
            <Input name="password" label="New Password"  type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />

             <Input name="confirmPassword" label="Repeat Password"  type="password" handleChange={handleChange}/> 

            </>
            
        
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{textTransform: "capitalize"}}>
            Forgot Password
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/auth' className={classes.fccbtn}  >SignIn</Link>
          
          
        </form>
      </Paper>
    </Container>
  );
};

export default Forgot;