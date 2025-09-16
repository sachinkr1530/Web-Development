import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
// import { GiPrivate } from "react-icons/gi";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />

      {/* <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/> */}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard"element={
      <PrivateRoute isLoggedIn={isLoggedIn}>
         <Dashboard />
      </PrivateRoute>
     }/>
    </Routes>
    </div>
  );
}

export default App;
