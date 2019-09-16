import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
import Card from 'react-bootstrap';


class App extends Component {
  render() {
    return (

    <BrowserRouter>
    <React.Fragment>
    <MainNavigation />
    <main className="main-content">
    <Switch>
    <Redirect from="/" to="/Auth" exact />
    <Route path="/Auth" component={AuthPage} />
    <Route path="/events" component={EventsPage} />
    <Route path="/bookings" component={BookingsPage} />
    </Switch>
    </main>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    </React.Fragment>
    </BrowserRouter>
    
   );
  }
}

export default App;
