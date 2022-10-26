// import Lottie from "lottie-web";
import { getAuth, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { Container } from "postcss";
import React, { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext/UserContext";
import app from "../../FireBase/FireBase.init";
import "./Register.css";



const auth = getAuth(app)
const Register = () => {
  const { user, HandlingCreatingNewUser } = useContext(AuthContext);
  const [verifyEmail, setEmailVerify] = useState();
  const [matchingPassword, setPasswordMatching] = useState();

  const creatingNewUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const FirstName = form.FirstName.value;
    const LastName = form.LastName.value;
    const email = form.email.value;
    const password = form.Password.value;
    const ConfirmPassword = form.ConfirmPassword.value;
    // console.log("name" + FirstName, "last" + LastName, "email" + email, "p" + password, "pc" + ConfirmPassword);

    // function for confirm password matching

    if (password === ConfirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Wow successFully you created an account',
        showConfirmButton: false,
        timer: 1500
      })
      setEmailVerify("Check your email and verify");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sorry password did not match!',
      })
      setPasswordMatching(" Sorry password did not match!");
    }
    form.reset()
    
    HandlingCreatingNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyYourEmail();
      })
      .catch((error) => console.error(error));
  };
  // verify email
  const verifyYourEmail = () => {
       sendEmailVerification(auth.currentUser)
       .then(()=>{})
  };

  //     const container = useRef(null)
  //   useEffect(() => {
  //     Lottie.loadAnimation({
  //         container: container.current,
  //         renderer: "svg",
  //         loop: true,
  //         autoplay: true,
  //         animationData: require('../../office.json'),
  //         rendererSettings: {
  //             context: container, // the canvas context
  //             scaleMode: 'noScale',
  //             clearCanvas: false,
  //             progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
  //             hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  //           }
  //     })
  //   }, []);

  return (
    <div className="flex justify-between signInAndSignUpPage ">
      {/* <div className="LottieFile">
        <div className="LottieFile" ref={container}></div>
      </div> */}

      <div className="flex flex-col signInAndSignUP max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-4 text-center">
          <h1 className="my-2 text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">Sign up to access your account</p>
        </div>
        <form action="" onSubmit={creatingNewUser} className="space-y-4 ng-untouched ng-pristine ng-valid">
          <div className="space-y-2">
            <div>
              <label for="FirstName" className=" text-sm">
                First name
              </label>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                placeholder="First Name"
                className="w-full px-2 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label for="LastName" className=" text-sm">
                Last name
              </label>
              <input
                type="text"
                name="LastName"
                id="LastName"
                placeholder="Last Name"
                className="w-full px-2 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label for="email" className=" text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@emai.com"
                className="w-full px-2 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="Password"
                id="password"
                placeholder="*****"
                className="w-full px-2 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label for="ConfirmPassword" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                placeholder="*****"
                className="w-full px-2 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <p className="text-red-600 font-bold">{matchingPassword}</p>
            <p className="text-green-600">{verifyEmail}</p>
            <div className="flex">
              <input
                type="checkbox"
                name="checkbox"
                id="password"
                required
                placeholder="*****"
                className=" w-4  border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />

              <p>
                Accept All terms and{" "}
                <Link to="terms" className="cursor-pointer text-black">
                  Conditions
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="">
            <div>
              <button
                type="submit"
                className="w-full px-3 py-1 font-semibold rounded-md bg-pink-600 signUp text-gray-50"
              >
                Sign in
              </button>
            </div>

            <p className="px-3 text-sm text-center text-gray-600">
              Already have an account?
              <Link to="/login" className="hover:underline text-pink-600">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
