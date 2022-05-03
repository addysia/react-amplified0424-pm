import React, { Component } from 'react';
import Tabs from "./Tabs";
import SearchByCourseCat from './SearchByCourseCat';
import SearchShortestPath from './SearchShortestPath';
import CoursesOld from './CoursesOld';
import SearchInstituteRating from './SearchInstituteRating';

export default class Courses extends Component {
  render() {
    return (
      <div>
        <Tabs>
        <div label="Search By Category">
          <SearchByCourseCat />
        </div>
        <div label="Search By Shortest Path to Dream Career">
          <SearchShortestPath />
        </div>
        {/* <div label="Search By Career">
          After 'while, <em>Crocodile</em>!
        </div> */}
        <div label="Check Institute Rating">
          <SearchInstituteRating/>
        </div>
      </Tabs>
      
      </div>
    )
  }
}
