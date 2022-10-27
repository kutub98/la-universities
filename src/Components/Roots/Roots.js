import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Course from "../Course/Course";
import ErrorPage from "../ErrorPage404/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Resgister/Register";
import Main from "../Main/Main";
import Teachers from "../Teachers/Teachers";
import Faq from "../Faq/Faq.js";
import PrivateRoute from "../PrivetaRoute/PrivateRoute";
import CourseDetails from "../CourseDetails/CourseDetails";
import PremiumAccess from "../PremiumAccess/PremiumAccess";
import Profile from "../Profile/Profile";

const Roots = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        {
          path: "course",
          loader: ()=> fetch('https://launiversity.vercel.app/allCourse'),
          element: <PrivateRoute><Course></Course></PrivateRoute>,
        },
        { path: "blog", element: <Blogs></Blogs> },
        { path: "login", element: <Login></Login> },
        { path: "register", element: <Register></Register> },
        { path: "teachers", element: <Teachers></Teachers> },
        { path: "askedQuestion", element: <Faq></Faq> },
        {path: '/allCourse/:id', 
        loader: ({params})=> fetch(`https://launiversity.vercel.app/allCourse/${params.id}`),
        element:<CourseDetails></CourseDetails>},
        {path: 'premium', element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>},
        {path: 'profile' , element: <Profile></Profile>}
      ],
    },
    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Roots;
