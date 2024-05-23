import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddName}) => {
    const [courses,setCourse] = useState([]);
    
    useEffect(()=>{
      fetch('course.json')
      .then(res => res.json())
      .then(data => setCourse(data))
      
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-16 ">
        
           {
            courses.map(course => <Course key={course.id} handleAddName={handleAddName} course={course}></Course>)
        
           } 

        </div>
    );
};

export default Courses;