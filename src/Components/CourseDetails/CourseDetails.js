import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const CourseDetails = () => {
   const [courseDetails, setCourseDetails] = useState([])

    useEffect((id)=>{
        fetch(`http://localhost:5000/allCourse/${id}`)
        .then(res => res.json())
        .then(data => setCourseDetails(data))
    },[])
    console.log(courseDetails)
    return (
        <div>
           
        </div>
    );
};

export default CourseDetails;