import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = ({sCourse}) => {
    // console.log(sCourse)
    const {thumbnail_url, title,total_Credit, Course_fee, id} = sCourse;
    return (
        <div>
            <div className="">
                <div className="singleCourese relative">
                    <img src={thumbnail_url} alt="" className="w-full h-52" />
                    <div className="courseText">
                        <h1>{title}</h1>
                        <h1>Total Credit: {total_Credit}</h1>
                        <h1>Course fee : {Course_fee}</h1>
                        <Link key={id} to={`/allCourse/${id}`}>More Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;