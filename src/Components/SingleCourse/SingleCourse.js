import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({sCourse}) => {
    console.log(sCourse)
    const {thumbnail_url, title,total_Credit, Course_fee} = sCourse;
    return (
        <div>
            <div className="">
                <div className="singleCourese">
                    <img src={thumbnail_url} alt="" className="w-full h-52" />
                    <div>
                        <h1>{title}</h1>
                        <h1>Total Credit: {total_Credit}</h1>
                        <h1>Course fee : {Course_fee}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;