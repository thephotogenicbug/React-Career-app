import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Signup from './Components/Signup-Login/Signup';
import Login from './Components/Signup-Login/Login';
import Introduction from './Components/Introduction/Introduction';
import { Navbar } from './Components/Navbar';
import Profile from './Components/Profile/Profile';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';

function App() {
  return (
    <HashRouter>
     
      <Route exact path='/' component={Main} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/intro' component={Introduction}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/application' component={ApplicationForm}/>
    </HashRouter>
  );
}

export default App;
