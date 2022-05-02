import React from 'react';
import { API, COGNITO } from '../Common/config';
import avatar from '../assets/avatar.jpeg';

class UserInfo extends React.Component {
    constructor(props) {
        super();
        this.content = 
        <>
        <h4><a href="#">{ props.userdata.username }</a></h4>
        <ul>
             <li>
                <div className="d-flex align-items-center">
                    <span>Full Name :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.userdata.fullName }</a>
                </div>
            </li>

            <li>
                <div className="d-flex align-items-center">
                    <span>Email :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.userdata.email }</a>
                </div>
            </li>

            <li>
                <div className="d-flex align-items-center">
                    <span>Phone :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.userdata.phone }</a>
                </div>
            </li>

        </ul>
        </>
        ;
    }

    render(){
        return this.content;
    }

}

class CareerInfo extends React.Component {
    constructor(props) {
        super();
        this.content = 
    <div style={{paddingBottom:"0px", marginBottom:"10px"}} className="course-widget course-details-info">
        <ul style={{paddingBottom:"0px"}}>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-user"></i>Company :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.careerdata.companyName }</a>
                </div>
            </li>

             <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-file-alt"></i>Years Of Service :</span>
                    { props.careerdata.yearsOfService }
                </div>
            </li>
             <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="fa fa-user"></i>Industry :</span>
                    <a href="#" className="d-inline-block">{ props.careerdata.industry }</a>
                </div>
            </li>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="fa fa-clock"></i>Domain :</span>
                    { props.careerdata.domain }
                </div>
            </li>

            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-calendar"></i>Position :</span>
                    { props.careerdata.position }
                </div>
            </li>

            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-calendar"></i>Start Date :</span>
                    { props.careerdata.startDate }
                </div>
            </li>

            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-calendar"></i>End Date :</span>
                    { props.careerdata.endDate }
                </div>
            </li>
        </ul>
        <hr />
    </div>;
    }

    render(){
        return this.content;
    }
}

class EducationInfo extends React.Component {
    constructor(props) {
        super();
        this.content = 
    <div style={{paddingBottom:"0px", marginBottom:"10px"}} className="course-widget course-details-info">
        <ul style={{paddingBottom:"0px"}}>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-user"></i>Qualificatin Type :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.educationdata.qualificationType }</a>
                </div>
            </li>

             <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-file-alt"></i>Year Of Completion :</span>
                    { props.educationdata.yearOfCompletion }
                </div>
            </li>
             <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="fa fa-user"></i>Institution Name :</span>
                    <a href="#" className="d-inline-block">{ props.educationdata.institutionName }</a>
                </div>
            </li>

        </ul>
        <hr />
    </div>;
    }

    render(){
        return this.content;
    }
}

class PersonalityInfo extends React.Component {
    constructor(props) {
        super();
        this.content = 
    <div style={{paddingBottom:"0px", marginBottom:"10px"}} className="course-widget course-details-info">
        <ul style={{paddingBottom:"0px"}}>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-user"></i>Personality Type :</span>
                    <a href="#" className="d-inline-block"></a><a href="#">{ props.personalitydata.personalityType }</a>
                </div>
            </li>

             <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="far fa-file-alt"></i>Method Of Assessment :</span>
                    { props.personalitydata.assessmentMethod }
                </div>
            </li>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="fa fa-user"></i>Description :</span>
                    <a href="#" className="d-inline-block">{ props.personalitydata.description }</a>
                </div>
            </li>
            <li>
                <div className="d-flex justify-content-between align-items-center">
                    <span><i className="fa fa-user"></i>Traits :</span>
                    <a href="#" className="d-inline-block">
                    {
                        props.personalitydata.traits.map(trait => (
                            <span>{trait},</span>
                        ))
                    }
                    </a>
                </div>
            </li>

        </ul>
        <hr />
    </div>;
    }

    render(){
        return this.content;
    }
}


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            educationList: [],
            careerList: [],
            personalityList: []
          };
        
      }

      componentDidMount() {
        fetch(API.ENDPOINT.GET_USER_TEST)
          .then(res => res.json())
          .then(
            (result) => { console.log("API CAll Result"); console.log(result);
              this.setState({
                isLoaded: true,
                userData : result.data.user,
                educationList: result.data.user.eduProfileList,
                careerList: result.data.user.careerProfileList,
                personalityList: result.data.user.personalityProfileList
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        const { error, isLoaded, userData, educationList, careerList, personalityList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else  {
                return (
                    <>
                    <section className="page-wrapper edutim-course-single edutim-course-content">
                        <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="courses-instructor">
                                            <div className="single-instructor-box">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="instructor-image">
                                                            <img src={ avatar } alt="" className="img-fluid" />
                                                        </div>
                                                        <br />
                                                    </div>
                        
                                                    <div className="col-lg-8 col-md-8">
                                                        <div id="userInfoContainer" className="instructor-content">
                                                            <UserInfo userdata ={ userData } />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   

                                        <nav className="course-single-tabs learn-press-nav-tabs">
                                            <div className="nav nav-tabs  course-nav" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-education" role="tab" aria-controls="nav-home" aria-selected="true">Education</a>
                                                <a className="nav-item nav-link" id="nav-topics-tab" data-bs-toggle="tab" href="#nav-career" role="tab" aria-controls="nav-profile" aria-selected="false">Career</a>
                                                <a className="nav-item nav-link" id="nav-instructor-tab" data-bs-toggle="tab" href="#nav-personality" role="tab" aria-controls="nav-contact" aria-selected="false">Personality</a>
                                            </div>
                                        </nav>    

                                        <div className="tab-content edutim-course-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-education" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="edutim-course-curriculum " >
                                                    <div className="curriculum-scrollable">

                                                        <div style={{paddingBottom:"0px"}} class="course-sidebar course-sidebar-2">
                                                        {
                                                            educationList.map(eduData => (
                                                               <EducationInfo educationdata={ eduData } />
                                                            ))
                                                        }

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="nav-career" role="tabpanel" aria-labelledby="nav-topics-tab">
                                                <div className="edutim-course-curriculum " >
                                                    <div className="curriculum-scrollable">
                                                    
                                                        <div style={{paddingBottom:"0px"}} class="course-sidebar course-sidebar-2">
                                                        {
                                                            careerList.map(careerData => (
                                                               <CareerInfo careerdata={ careerData } />
                                                            ))
                                                        }
                                                            
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="nav-personality" role="tabpanel" aria-labelledby="nav-instructor-tab">
                                                <div className="edutim-course-curriculum " >
                                                    <div className="curriculum-scrollable">
                                                        
                                                        <div style={{paddingBottom:"0px"}} class="course-sidebar course-sidebar-2">
                                                        {
                                                            personalityList.map(personalityData => (
                                                               <PersonalityInfo personalitydata={ personalityData } />
                                                            ))
                                                        }
                                                        </div>  

                                                    </div>
                                                </div>
                                            </div>
                                        </div>  

                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    
                );
            }
    }
}

export default Profile;