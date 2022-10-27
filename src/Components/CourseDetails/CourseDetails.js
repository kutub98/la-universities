import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
            <h1>Course name: {title}</h1>
            <h3>Durations : {duration}</h3>
            <h3> Total Course{Course_fee}</h3>
            <h3>First semester fee {firstSemesterFee}</h3>
            <h2>Total Credit :{total_Credit}</h2>
            <h3>Per Credit fee: {perCreditPee}</h3>
            <h3>{admissionFee}</h3>
            <button>Enroll Now</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default CourseDetails;
