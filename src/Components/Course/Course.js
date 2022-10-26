import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Course.css'

const Course = () => {
    const allCourse = useLoaderData();
    // console.log(allCourse);
    // const [allCourse, setAllCourse] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/allCourse')
    //     .then(res => res.json())
    //     .then(data => setAllCourse(data))
    // },[])
    console.log(allCourse)
    return (
        <div>
            <h1>All course are here</h1>
            <div className="CourseBox">
            {
                allCourse.map(sCourse => <SingleCourse key={sCourse.id} sCourse={sCourse}></SingleCourse>)
            }
            </div>
        </div>
    );
};

export default Course;