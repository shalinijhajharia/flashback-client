import React from 'react';
import { Container  } from '@material-ui/core';

import { BrowserRouter,Switch,Route ,Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

import PostDetails from './components/PostDetails/PostDetails';
import Verify from './components/Auth/Verify';
import Forgot from './components/Auth/forgot';

const App = () => {
const user=JSON.parse(localStorage.getItem('profile'));

  return(

    <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={()=><Redirect to ="/posts"/>}/>
        <Route path="/posts" exact component={Home}/>
        <Route path="/posts/search" exact component={Home}/>
        <Route path="/posts/:id"  component={PostDetails}/>
        <Route path="/auth" exact component={()=>(!user?<Auth/> : <Redirect to="/posts"/>)}/>
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/verify" exact component={Verify}/>
      </Switch>
    </Container>
  </BrowserRouter>
  );
   
    
 
};

export default App;