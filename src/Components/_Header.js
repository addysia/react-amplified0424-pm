import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
          <div>
          <header>
          <div className="header-top ">
            <div className="container-fluid container-padding">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <p>Are you interested in Joining program? <a href="#">Contact me.</a></p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header-right float-lg-end">
                    <Link to="/login" replace>Membership Login </Link>
                  </div>
                </div>
              </div>
            </div>    
          </div>
          {/* Main Menu Start */}
            <div className="site-navigation main_menu menu-transparent" id="mainmenu-area">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container-padding">
                  <Link to="/">
                      <a className="navbar-brand">
                        <img src="assets/images/dark-logo.png" alt="Eduhash" className="img-fluid" />
                      </a>
                  </Link>
                  
                  {/* Toggler */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars" />
                  </button>
                  {/* Collapse */}
                  <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Home<i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                          <a className="dropdown-item " href="index.html">
                            Home 1
                          </a>
                          <Link to='/index.html'>Home 1.5</Link>
                          <a className="dropdown-item " href="index-2.html">
                            Home 2
                          </a> 
                          <a className="dropdown-item " href="index-3.html">
                            Home 3
                          </a> 
                          <a className="dropdown-item " href="index-4.html">
                            Home 4
                          </a> 
                        </div>
                      </li>
                      <li className="nav-item ">
                        {/* <a href="about.html" className="nav-link js-scroll-trigger">
                          About us
                        </a> */} 
                        <Link to="/about">
                        <a className="nav-link js-scroll-trigger">About us</a>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
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
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Pages<i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                          <a className="dropdown-item " href="login.html">
                            <Link to="/login">Login </Link>
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
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Blog<i className="fa fa-angle-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbar3">
                          <a className="dropdown-item " href="blog.html">
                            Blog
                          </a>
                          <a className="dropdown-item " href="blog-single.html">
                            Blog Single
                          </a> 
                        </div>
                      </li>
                      <li className="nav-item ">
                        <a href="contact.html" className="nav-link">
                          Contact
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

        </div>

    )
  }
}
