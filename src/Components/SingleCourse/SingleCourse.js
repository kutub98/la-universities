import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = ({sCourse}) => {
    // console.log(sCourse)
    const {thumbnail_url, title,total_Credit, Course_fee, id} = sCourse;
    return (
        <div>
            <div className="">
                <div className="singleCourse">
                    <img src={thumbnail_url} alt="" className="w-full h-52" />
                    <div className="courseText relative">
                        <h1 className='text-sm font-extrabold'>{title}</h1>
                        <h1>Total Credit: {total_Credit}</h1>
                        <h1>Course fee : {Course_fee}</h1>
                    </div>
                    <Link className="bg-green-700  px-4 py-3 justify-center text-white rounded-md" key={id}  to={`/allCourse/${id}`}>More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;