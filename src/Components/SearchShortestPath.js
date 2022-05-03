import React, { useState, useEffect } from 'react'

const SearchShortestPath =() => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [courses, setCourses] = useState([]);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [careers, setCareers] = useState([]);
    //const [courses, setCourses] = useState([]);
    const [value, setValue] = useState(null); // to handle dropdownchange for current career
    const [value2, setValue2] = useState(null); // to handle dropdownchange for new career


    const handleChange =(event) => {
        setValue(event.target.value);
        event.preventDefault();
        // console.log(event.target.value)
      }

      const handleChange2 =(event) => {
        setValue2(event.target.value);
        event.preventDefault();
        // console.log(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        let headers = '("Access-Control-Allow-Origin", "*")';
        let career1 = encodeURIComponent(value);
        let career2 = encodeURIComponent(value2);

        fetch(`https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/careerswitch/shortestpath?career1=`+career1+`&career2=`+career2, {
            method: "GET",
            //headers: headers,   
            })
        //fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/shortestpath?/career1={{"+value+"}}&career2={{"+value2+"}")
        //fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/shortestpath?/career1={{Software Engineer}}&career2={{Solution Architect}")
            .then(async res => {
                const data = await res.json();

                if (!res.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || res.statusText;
                    return Promise.reject(error);
                }
                setIsLoaded2(true);
                setCourses(data.data);
                // console.log(JSON.stringify(data.data))
            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    
    useEffect(() => {
        fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/careers")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCareers(result.data);
                    //console.log(JSON.stringify(result.data))
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
                    </div>
                        <h4>Select Your Current Career, Career Target and Hit Submit!</h4>
                    <div className="col-lg-10">
                        <div className="topbar-search">
                        <form onSubmit={handleSubmit}> 
                            <select value={value} onChange={handleChange}>
                                <option value="">Select Current Career</option>
                                {careers.map(career => (
                                        <option value={career.Name}>{career.Name}</option>
                                    ))
                                }
                            </select>
                            <select value={value} onChange={handleChange2}>
                                <option value="">Select Career Target</option>
                                {careers.map(career => (
                                        <option value={career.Name}>{career.Name}</option>
                                    ))
                                }
                            </select>
                            <input type="submit" value="Submit" />      
                        </form>                        
                        </div>
                    </div>
                    </div>
                </div>
			</div>
        </section>

        {/* Coursee List Section */}
        <div className="container">
        <h5>Showing {courses.length} results</h5>
			<div className="row">
                {courses.map(cse => (
				<div className="col-xl-4 col-lg-4">


				<div className="course-block">
					<div className="course-img">
					<img src="assets/images/course/course-1.jpg" alt className="img-fluid" />
					<div className="course-price2">$100</div>   
					</div>
					<div className="course-content">
					<div className="course-meta">
						<span className="course-student"><i className="fa fa-user-alt" />Rating : <span key={cse.id}>{cse.Course_Rating}</span></span>
						<span className="course-duration"><i className="far fa-file-alt" /><span key={cse.id}> Duration:{cse.DurationInDay} days</span></span>
					</div>
					<h4>Course Name: <span key={cse.id}>{cse.Name}</span></h4>
                    <h5>Institute : <span key={cse.id}>{cse.Institue}</span></h5>
                    {/* <h5>Duration : <span key={cse.id}>{cse.DurationInDay} days</span></h5>
                    <h5>Rating : <span key={cse.id}>{cse.Course_Rating}</span></h5> */}
                    <h5>Sequence : <span key={cse.id}>{cse.Sequence}</span></h5>                    
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

export default SearchShortestPath;