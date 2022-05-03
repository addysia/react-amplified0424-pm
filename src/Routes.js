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
import SignIn from './Components/SignIn';
import HomeUnsigned from './Components/HomeUnsigned';
import CoursesOld from './Components/CoursesOld';

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
            <Contact />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/coursesold">
            <CoursesOld />
          </Route>
          <Route path="/profile">
             <Profile />
          </Route>         
          <Route path="/SignIn">
            <HomeUnsigned />
          </Route>
        </Switch>
      
      </>
    )
  }
}
