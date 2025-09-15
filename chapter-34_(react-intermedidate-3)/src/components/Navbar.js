import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className=" flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Login button */}
      <div className="flex gap-3 ml-5 mr-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {
          <Link to="/signup">
            <button >
              sign Up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button onClick={()=> {
              setLoggedIn(false);
              toast.success("Logged out");
            }}>
              Logout
              </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
