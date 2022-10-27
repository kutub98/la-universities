import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  // const {id}= useParams();
  // console.log(id)
  const myData = useLoaderData();
  console.log(myData);
  const { thumbnail_url, title, total_Credit, Course_fee, admissionFee, firstSemesterFee, perCreditPee, duration, id } =
    myData;
  const noImg =
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
  return (
    <div>
      <div className="MainTitle">
        <h1>{title}</h1>
      </div>
      <div className="courseDetailsContainer">
        <div className="fullDetails">
          <div className="CourseImg">
            <img src={thumbnail_url} alt=""></img>
          </div>
          <div className="courseDetails">
            <h1 className=" font-extrabold text-lg mb-2 ">Course name: {title}</h1>
            <h3 className="font-semibold text-lg text-green-900 mb-2">Durations : {duration}</h3>
            <h1 className="font-semibold text-lg text-black mb-2"> Total Course{Course_fee}</h1>
            <h3 className="font-semibold text-lg text-green-900 mb-2">First semester fee {firstSemesterFee}</h3>
            <h1 className="font-semibold text-lg text-black mb-2">Total Credit :{total_Credit}</h1>
            <h3 className="font-semibold text-lg text-green-900 mb-2">Per Credit fee: {perCreditPee}</h3>
            <h3 className="font-semibold text-lg text-black mb-2">{admissionFee}</h3>
            <div className="buttonDiv">
            <button className="font-semibold px-5 py-3 bg-green-900  text-lg text-white">Enroll Now</button>
            <p> Apply for Premium Access</p>
            <Link to="" className="font-semibold px-5 py-3 bg-green-900  text-lg text-white">Premium Access</Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default CourseDetails;
