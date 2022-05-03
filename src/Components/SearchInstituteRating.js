import React, { useState, useEffect } from 'react'


const SearchInstituteRating = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [institutes, setInstitutes] = useState([]);
    useEffect(() => {
        fetch("https://mtyl3wmuu9.execute-api.us-east-1.amazonaws.com/v1/institutes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setInstitutes(result.data);
                    console.log(JSON.stringify(result.data))
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
                        <h5>Showing {institutes.length} results</h5>
                    </div>
                    <div className="col-lg-4">
                        <div className="topbar-search">
                        {/* <form method="get" action="#">
                            <input type="text" placeholder="Search our courses" className="form-control" />
                            <label><i className="fa fa-search" /></label>
                        </form> */}
                        </div>
                    </div>
                    </div>
                </div>
			</div>
        </section>

        {/* Coursee List Section */}
        <div className="container">
			<div className="row">
                {institutes.map(institute => (
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
					<h4><span key={institute.id}>{institute.Address1}</span></h4>
                    <h5>Add: <span key={institute.id}>{institute.Address2}</span></h5>
					<h5>Rating: <span key={institute.id}>{institute.AvgRating}</span></h5>
                    <h5>Founded: <span key={institute.id}>{institute.FoundedOn}</span></h5>
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

export default SearchInstituteRating;