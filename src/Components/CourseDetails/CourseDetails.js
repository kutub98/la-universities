import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const CourseDetails = () => {
    // const {id}= useParams();
    // console.log(id)
   

   const myData = useLoaderData()
   console.log(myData)


    
    return (
        <div>
           
        </div>
    );
};

export default CourseDetails;