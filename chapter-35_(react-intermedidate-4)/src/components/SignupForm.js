import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType]= useState("student");
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function SubmitHandler(event) {
    event.preventDefault();
    // setIsLoggedIn(true);
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");
    // navigate to dashboard
    const accountData = {
      ...formData,
    };
    const finalData={
      ...accountData,
      accountType
    }
    console.log("Printing final account data");
    console.log(finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-Instructor tab */}
      <div
      className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
        <button
        className={`${accountType==="student"
          ?
          "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded full transition-all duration-200`}
        onClick={()=> setAccountType("student") }>
          Student
        </button>
        <button
        className={`${accountType==="instructor"
          ?
          "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
      <form onSubmit={SubmitHandler}>
        {/* first name and Last name in side of div  */}

        <div className="flex gap-x-4 mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            ></input>
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            ></input>
          </label>
        </div>

        {/* email  address  */}
        <div className=" mt-[20px]">

          <label className="w-full mt-[20px]">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={changeHandler}
            value={formData.email}
            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
        </label>


        </div>
        
        {/*  create PAssword and Confirm Password  */}

        <div className="w-full flex gap-x-4 mt-[20px] ">
          <label className=" w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              onChange={changeHandler}
              value={formData.password}
            ></input>
            <span
             className="absolute right-3 top-[38px] cursor-pointer "
            onClick={() =>  setShowPassword((prev) => !prev)}>
              {showPassword ?
               <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> 
               :
               <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>

          <label className=" w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              onChange={changeHandler}
              value={formData.confirmPassword}
            ></input>
            <span 
             className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>
        </div>
        <button 
        className="w-full bg-yellow-400 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
