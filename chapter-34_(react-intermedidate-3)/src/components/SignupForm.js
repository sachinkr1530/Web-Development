import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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
    const accountData={
        ...formData
    };
    console.log("Printing aaccount data");
    console.log(accountData)
    navigate("/dashboard");
}

return (
  <div>
    {/* student-Instructor tab */}
    <div>
      <button>Student</button>
      <button>Instructor</button>
    </div>
    <form onSubmit={SubmitHandler}>
      {/* first name and Last name in side of div  */}

      <div>
        <label>
          <p>
            First Name<sup>*</sup>
          </p>
          <input
            required
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
          ></input>
        </label>

        <label>
          <p>
            Last Name<sup>*</sup>
          </p>
          <input
            required
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
          ></input>
        </label>
      </div>

      {/* email  address  */}
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter Email Address"
          onChange={changeHandler}
          value={formData.email}
        ></input>
      </label>

      {/*  create PAssword and Confirm Password  */}

      <div>
        <label>
          <p>
            Create Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
          ></input>
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label>
          <p>
            confirm Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
          ></input>
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
      </div>
      <button>
        Create Account
      </button>
    </form>
  </div>
);

}

export default SignupForm;
