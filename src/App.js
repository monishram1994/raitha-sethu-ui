import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import NewUser from './components/NewUser';
import Home from './components/Home';
import Navigation from './components/Navigation';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/userRegistration" component={NewUser} />
             
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

  );
}

export default App;
