import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
    // console.log(allCourse)
    return (
        <div className="courseSection">
            <div className="CourseBox">
            {
                allCourse.map(sCourse => <SingleCourse key={sCourse.id} sCourse={sCourse}></SingleCourse>)
            }
            </div>
            <div className='title'>
               {
                allCourse.map(title => <li key={title.id}><Link title='title'>{title.title}</Link></li>)
               }
            </div>
        </div>
    );
};

export default Course;