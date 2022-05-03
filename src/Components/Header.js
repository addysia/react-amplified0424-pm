import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../Routes';
import { Authenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from '../aws-exports';
// Amplify.configure(awsExports);



const Header = () => {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    
    // async function signIn() {
    //     // const username = 'admtest';
    //     // const password = '@@@###Abc123';
    //     try {
    //         const user = await Auth.signIn(username, password);
    //     } catch (error) {
    //         console.log('error signing in', error);
    //     }
    // }

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
                        <Link to="/SignIn">Membership Login</Link>
                        {/* <button onClick={signIn}>Members Sign In</button> */}
                        </a>
                        {/* <a onClick={signOut}> Sign out </a> */}
                        <button style={styles.button} onClick={signOut}>Sign out</button>
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
                        <li className="nav-item ">
                            <a className="nav-link">
                                <Link to="/courses">Courses</Link>
                            </a>
                        </li>                      
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

                        <li className="nav-item ">
                        <a className="nav-link">
                        <Link to="/profile">Profile</Link>
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

        <Routes />

      
      </div>
      </Router>
    )
  }

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: {  color: 'white', outline: 'none', fontSize: 14, backgroundColor: 'transparent' }
  }


export default Header;