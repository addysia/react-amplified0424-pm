//import React, { Component } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
//import { useAuthenticator } from '@aws-amplify/ui-react';
import Home from './Home';

const HomeUnsigned =() => {
  //const { route } = useAuthenticator(context => [context.route]);

  return (
    <div>
    <Authenticator>

          <section className="banner">
          <div className="container">
              <div className="row justify-content-center">
              <div className="col-md-12 col-xl-7">
                  <div className="banner-content text-center">
                  <span className="subheading">Expert instruction</span>
                  <h1><span className="font-weight-normal">It's time to amplify</span> your online business</h1>
                  <p>Eduhash is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                  <a href="#" className="btn btn-main me-2">our Courses </a>  
                  <a href="#" className="btn btn-tp">Sign up </a>  
                  </div>
              </div>
              </div> {/* / .row */}
          </div> {/* / .container */}
        </section>
    </Authenticator>

            </div>
          )

  
}

export default HomeUnsigned;