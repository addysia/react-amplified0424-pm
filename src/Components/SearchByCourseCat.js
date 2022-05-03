import React, { useState, useEffect } from 'react';


const SearchByCourseCat =() => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [courseCats, setCourseCats] = useState([]);
    const [course, setCourse] = useState([]);
    const [value, setValue] = useState(null); // to handle dropdownchange

    
    const handleChange =(event) => {
        setValue(event.target.value);
        //console.log(event.target.value)
        // console.log(value);
        if (event.target.value){
        fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/courses/"+event.target.value)
            .then(res => res.json())
            .then(
                (courses) => {
                    setIsLoaded2(true);
                    setCourse(courses.data);
                    // console.log(JSON.stringify(courses.data))
                },
                (error) => {
                    setIsLoaded2(true);
                    setError(error);
                }
            )
        }
      }
    
    // const handleSubmit = (event) => {
    //     alert('A name was submitted: ' + value);
    //     event.preventDefault();
    //   }

    useEffect(() => {
        fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/coursecategories")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCourseCats(result.data);
                    // console.log(JSON.stringify(result.data))
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
                    <div className="col-lg-5 col-xl-5">
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
                    <h5>Showing {course.length} results</h5>
                    </div>
                    <div className="col-lg-4">
                        <div> <h5>Select A Course Category: </h5> </div>
                        <div className="topbar-search">
                        <form> 
                        {/* onSubmit={handleSubmit} */}
                            {/* <input type="text" placeholder="Search our courses" className="form-control" /> */}
                            <select value={value} onChange={handleChange}>
                                <option value="">Select A Category</option>
                                {courseCats.map(courseCat => (
                                        <option value={courseCat.Name}>{courseCat.Name}</option>
                                    ))
                                }
                                </select>
                                      
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
                {course.map(course => (
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
					<h4>Course Name: <span key={course.id}>{course.Name}</span></h4>
                    {/* <p>Institute : <span key={course.id}>{course.Institute.Name}</span></p>
                    <p>CourseType : <span key={course.id}>{course.CourseType.Name}</span></p>     */}
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

export default SearchByCourseCat;