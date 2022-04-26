import React, { useState, useEffect } from 'react'


const Courses = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
            {/* Page Title Section */}
        <section className="page-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-8">
                        <div className="title-block">
                                    <h1>Courses</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
        {/* Search Section */}
        <section className="section-padding course">
            <div className="course-top-wrap">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-8">
                        <p>Showing 1-6 of 8 results</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="topbar-search">
                        <form method="get" action="#">
                            <input type="text" placeholder="Search our courses" className="form-control" />
                            <label><i className="fa fa-search" /></label>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
			</div>
        </section>

        {/* Coursee List Section */}
        <div className="container">
			<div className="row">
                {users.map(user => (
				<div className="col-xl-4 col-lg-4">


				<div className="course-block">
					<div className="course-img">
					<img src="assets/images/course/course-1.jpg" alt className="img-fluid" />
					<div className="course-price2">$100</div>   
					</div>
					<div className="course-content">
					<div className="course-meta">
						<span className="course-student"><i className="fa fa-user-alt" />340 Students</span>
						<span className="course-duration"><i className="far fa-file-alt" />82 Lessons</span>
						<span className="course-label">new</span>
					</div>
					<h4><span key={user.id}>{user.name}</span></h4>    
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
					</div>
				</div>
				</div>
                    ))}
                </div>
			</div>

        </>
        );
    }





  }


export default Courses;