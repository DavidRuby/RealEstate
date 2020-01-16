import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';



class App extends Component {


  render() {
    return (

    <BrowserRouter>
    <React.Fragment>

    <MainNavigation />
    <main className="main-content">
    <Switch>
  
    <Redirect from="/" to="/events" exact />
     <Redirect from="/auth" to="/events" exact />
    
      <Route path="/Auth" component={AuthPage} />
      
    <Route path="/events" component={EventsPage} />
     
      <Route path="/bookings" component={BookingsPage} />
      
      {!this.state.token && <Redirect to="/auth" exact />}
    </Switch>
    </main>
    
    </React.Fragment>
    </BrowserRouter>
    
   );
  }
}

export default App;
