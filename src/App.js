import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './Components/Pages/ToDo/ToDo';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import SingleTask from './Components/Pages/SingleTask/SingleTask';
import PageNot from './Components/Pages/NotfoundPage/PageNot';
import NavMenue from './Components/NavBar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavMenue />

      <Switch>
        <Route path='/' exact component={ToDo} />
        <Route path="/task" exact component={ToDo} />
        <Route path='/about' exact component={AboutUs} />
        <Route path="/task/:id" exact component={SingleTask} />
        <Route to='/404' exact component={PageNot} />
        <Redirect to='/404' />
      </Switch>

    </div>
  );
}

export default App;
