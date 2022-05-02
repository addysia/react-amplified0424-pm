import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from "./Components/About";
import Home from "./Components/Home";
import Todos from "./Components/TODOS";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blog";
import Courses from "./Components/Courses";
import TODOS from './Components/TODOS';
import Profile from './Components/Profile';

export default class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todo">
            <Todos />
          </Route>
          <Route path="/contact">
            <TODOS />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/profile">
             <Profile />
          </Route>
          
        </Switch>
      
      </>
    )
  }
}
