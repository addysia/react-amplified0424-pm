import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../Routes';

export default class Header extends Component {
  render() {
    return (
        <Router>
      <div>
            <header> 
            <div className="header-top ">
                <div className="container-fluid container-padding">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                    <p>Are you interested in Joining program? <a>
                    <Link to="/contact">Contact Me</Link>
                    </a></p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="header-right float-lg-end">
                        <a>
                        <Link to="/todo">Membership Login</Link>
                        </a>
                    </div>
                    </div>
                </div>
                </div>    
            </div>
            {/* Main Menu Start */}
            <div className="site-navigation main_menu menu-transparent" id="mainmenu-area">
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container-padding">
                    <a className="navbar-brand">
                    <Link to="/">
                        <img src="assets/images/dark-logo.png" alt="Eduhash" className="img-fluid" />
                    </Link>
                    </a>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav mx-auto">
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-angle-down" />
                            <Link to="/">Home</Link>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                            <a className="dropdown-item ">
                            <Link to="/">Home</Link>
                            </a>
                            <a className="dropdown-item ">
                            <Link to="/">Home 2</Link>
                            </a> 
                            <a className="dropdown-item ">
                            <Link to="/">Home 3</Link>
                            </a> 
                            <a className="dropdown-item ">
                            <Link to="/">Home 4</Link>
                            </a> 
                        </div>
                        </li> */}
                        <li className="nav-item ">
                            <a className="nav-link js-scroll-trigger">
                                <Link to="/">Home</Link>
                            </a>
                        </li>                        
                        <li className="nav-item ">
                        <a className="nav-link js-scroll-trigger">
                            <Link to="/about">About us</Link>
                        </a>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Courses<i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                            <a className="dropdown-item " href="course-grid.html">
                            Course Style 1
                            </a>
                            <a className="dropdown-item " href="course-grid-2.html">
                            Course Style 2
                            </a> 
                            <a className="dropdown-item " href="course-grid-3.html">
                            Course Style 3
                            </a> 
                            <a className="dropdown-item " href="course-grid-4.html">
                            Course Style 4
                            </a> 
                            <a className="dropdown-item " href="course-single.html">
                            Course Details Style 1
                            </a> 
                            <a className="dropdown-item " href="course-single2.html">
                            Course Details Style 2
                            </a> 
                        </div>
                        </li> */}
                        <li className="nav-item ">
                            <a className="nav-link">
                                <Link to="/courses">Courses</Link>
                            </a>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages<i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                            <a className="dropdown-item " href="login.html">
                            Login
                            </a>
                            <a className="dropdown-item " href="register.html">
                            Register
                            </a> 
                            <a className="dropdown-item " href="cart.html">
                            cart
                            </a> 
                            <a className="dropdown-item " href="checkout.html">
                            checkout
                            </a> 
                            <a className="dropdown-item " href="error.html">
                            404
                            </a> 
                        </div>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                            <i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                            <a className="dropdown-item " >
                            <Link to="/blogs">Blog</Link>
                            </a>
                            <a className="dropdown-item ">
                            <Link to="/blogs">Single Blog</Link>
                            </a> 
                        </div>
                        </li> */}
                        <li className="nav-item ">
                        <a className="nav-link">
                        <Link to="/blogs">Blog</Link>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link">
                        <Link to="/contact">Contact</Link>
                        </a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="header-socials social-links d-none d-lg-none d-xl-block">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-linkedin" /></a>
                        <a href="#"><i className="fab fa-pinterest" /></a>
                        </div>
                        <form action="#" className="header-form ms-3">
                        <input type="text" className="form-control" placeholder="search" />
                        <i className="fa fa-search" />
                        </form> 
                    </div>
                    </div> {/* / .navbar-collapse */}
                </div> {/* / .container */}
                </nav>
            </div>
            </header>

      
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todo">
            <Todos />
          </Route>
        </Switch> */}
        <Routes />

      
      </div>
      </Router>
    )
  }
}
