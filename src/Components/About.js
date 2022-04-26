import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
     <div>
            <section className="page-header">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-8">
                    <div className="title-block">
                        <h1>Who we are</h1>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="list-inline-item">/</li>
                        <li className="list-inline-item">
                            About Us
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Feature section start */}
            <section className="features pt-100">
                <div className="container">
                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                    <div className="feature-item">
                        <div className="feature-icon">
                        <i className="flaticon-flag" />
                        </div>
                        <div className="feature-text">
                        <h4>Expert Teacher</h4>
                        <p>Develop skills for career of various majors including computer</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                    <div className="feature-item">
                        <div className="feature-icon">
                        <i className="flaticon-layers" />
                        </div>
                        <div className="feature-text">
                        <h4>Self Development</h4>
                        <p>Develop skills for career of various majors including computer.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                    <div className="feature-item">
                        <div className="feature-icon">
                        <i className="flaticon-video-camera" />
                        </div>
                        <div className="feature-text">
                        <h4>Remote Learning</h4>
                        <p>Develop skills for career of various majors including language</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                    <div className="feature-item">
                        <div className="feature-icon">
                        <i className="flaticon-help" />
                        </div>
                        <div className="feature-text">
                        <h4>Life Time Support</h4>
                        <p>Develop skills for career of various majors including language</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Feature section End */}
            {/* About Section Start */}
            <section className="about-section section-padding">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                    <div className="video-block">
                        <img src="assets/images/bg/about.jpg" alt className="img-fluid" />
                        <a href="#" className="video-icon"><i className="fa fa-play" /></a>
                    </div>
                    </div>
                    <div className="col-xl-6 pl-5 col-lg-6">
                    <div className="section-heading mt-4 mt-lg-0 ">
                        <span className="subheading">Self Development Course</span>
                        <h3>Get Instant Access To <span> Expert solution</span></h3>
                        <p>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail </p>
                    </div>
                    <ul className="about-features">
                        <li>
                        <i className="fa fa-check" />
                        <h5>High Quality Video Details</h5>
                        </li>
                        <li>
                        <i className="fa fa-check" />
                        <h5>Powerful Audiance</h5>
                        </li>
                        <li>
                        <i className="fa fa-check" />
                        <h5>Premium Content Worldwide</h5>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-main">Our Courses</a>
                    </div>
                </div>
                </div>
            </section>
            {/* About Section END */}
            {/* COunter Section start */}
            <section className="counter-block">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12 bg-black counter-inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-item text-center">
                            <i className="flaticon-video-camera" />
                            <div className="count">
                            <span className="counter">90</span>
                            </div>
                            <h6>Instructors</h6>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-item text-center">
                            <i className="flaticon-layers" />
                            <div className="count">
                            <span className="counter">1450</span>
                            </div>
                            <h6>Total Courses</h6>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">         
                        <div className="counter-item text-center">
                            <i className="flaticon-flag" />
                            <div className="count">
                            <span className="counter">5697</span>
                            </div>
                            <h6>Registered Enrolls</h6>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-item text-center border-0">
                            <i className="flaticon-help" />
                            <div className="count">
                            <span className="counter">100</span>%
                            </div>
                            <h6>Satisfaction rate</h6>     
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* COunter Section End */}
            {/* Team section start */}
            <section className="team pt-100">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-xl-7">
                    <div className="section-heading center-heading">
                        <span className="subheading">Best Expert Team</span>
                        <h3>Our Professional Team</h3>
                        <p>The ultimate planning solution for busy women who want to reach their personal goals</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item mb-4 mb-lg-0">
                        <img src="assets/images/team/team-4.jpg" alt className="img-fluid" />
                        <div className="team-info">
                        <h5>Harish Ham</h5>
                        <p>CEO, Developer</p>
                        <ul className="team-socials list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item mb-4 mb-lg-0">
                        <img src="assets/images/team/team-1.jpg" alt className="img-fluid" />
                        <div className="team-info">
                        <h5>Tanvir Hasan</h5>
                        <p>Market Researcher</p>
                        <ul className="team-socials list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item mb-4 mb-lg-0">
                        <img src="assets/images/team/team-2.jpg" alt className="img-fluid" />
                        <div className="team-info">
                        <h5>Mikele John</h5>
                        <p>Content Writter</p>
                        <ul className="team-socials list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item">
                        <img src="assets/images/team/team-3.jpg" alt className="img-fluid" />
                        <div className="team-info">
                        <h5>Mikele John</h5>
                        <p>Content Writter</p>
                        <ul className="team-socials list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Team section End */}
            {/* Testimonial section start */}
            <section className="testimonial-2 section-padding">
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-xl-5 me-auto">
                    <div className="section-heading">
                        <span className="subheading">Testimonials</span>
                        <h3>Success Stories from person</h3>
                        <p>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail.Take the control of their life back</p>
                        <p>Help you to get the best course that fits you <a href="#" className="text-underline d-block">Free Consultation <i className="fa fa-angle-right ml-2" /></a></p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                    <div className="testimonials-slides-2 owl-carousel owl-theme">
                        <div className="testimonial-item">
                        <i className="fa fa-quote-right" />
                        <div className="client-info">
                            <img src="assets/images/clients/test-1.jpg" alt className="img-fluid" />
                            <div className="testionial-author">Jessica Smith - Amazon co.</div>
                        </div>
                        <div className="testimonial-info-title">
                            <h4>One of the easiest online accounting systems we've tried.</h4>
                        </div>
                        <div className="testimonial-info-desc">
                            People who build their own home tend to be very courageous. These people are curious about life.
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <i className="fa fa-quote-right" />
                        <div className="client-info">
                            <img src="assets/images/clients/test-2.jpg" alt className="img-fluid" />
                            <div className="testionial-author">Jessica Smith - Amazon co.</div>
                        </div>
                        <div className="testimonial-info-title">
                            <h4>One of the easiest online accounting systems we've tried.</h4>
                        </div>
                        <div className="testimonial-info-desc">
                            People who build their own home tend to be very courageous. These people are curious about life. 
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <i className="fa fa-quote-right" />
                        <div className="client-info">
                            <img src="assets/images/clients/test-3.jpg" alt className="img-fluid" />
                            <div className="testionial-author">Jessica Smith - Amazon co.</div>
                        </div>
                        <div className="testimonial-info-title">
                            <h4>One of the easiest online accounting systems we've tried.</h4>
                        </div>
                        <div className="testimonial-info-desc">
                            They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <i className="fa fa-quote-right" />
                        <div className="client-info">
                            <img src="assets/images/clients/test-1.jpg" alt className="img-fluid" />
                            <div className="testionial-author">Jessica Smith - Amazon co.</div>
                        </div>
                        <div className="testimonial-info-title">
                            <h4>One of the easiest online accounting systems we've tried.</h4>
                        </div>
                        <div className="testimonial-info-desc">
                            People who build their own home tend to be very courageous. These people are curious about life.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Testimonial section End */}
            {/* CTA Sidebar start */}
            <section className="cta bg-gray section-padding">
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7">
                    <div className="section-heading center-heading mb-0">
                        <span className="subheading">be a instructor</span>
                        <h3>Want to Become an Instructor ?</h3>
                        <p className="mb-4">Join millions of people from around the world
                        learning together. Online learning is as easy and
                        natural as chatting.</p>
                        <a href="#" className="btn btn-main">Become Instructor</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* CTA Sidebar end */}
            </div>

      
      </div>
    )
  }
}
