
import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className="flex justify-between items-cente w-11/12 max-w-[1260px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
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

      <div className="flex items-center gap-x-4">
        {/* Login button → only when logged out */}
        {!isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
             border-richblack-700"
            >
              Log in
            </button>
          </Link>
        )}

        {/* Sign Up button → only when logged out */}
        {!isLoggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
             border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        )}

        {/* Logout button → only when logged in */}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged out");
              }}
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
             border-richblack-700"
            >
              Logout
            </button>
          </Link>
        )}

        {/* Dashboard button → only when logged in */}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
             border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;





//  uppr wala code chatgpt se h niche wala aapna h 


// import React from "react";
// import logo from "../assets/Logo.svg";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Navbar = (props) => {
//   let isLoggedIn = props.isLoggedIn;
//   let setLoggedIn = props.setLoggedIn;
//   return (
//     <div className="flex justify-between items-cente w-11/12 max-w-[1160px] py-4 mx-auto">
//       <Link to="/">
//         <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
//       </Link>

//       <nav>
//         <ul className="text-richblack-100 flex gap-x-6">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/">About</Link>
//           </li>
//           <li>
//             <Link to="/">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       {/* Login button */}
//       <div className="flex items-center gap-x-4">
//         {!isLoggedIn && (
//           <Link to="/login">
//             <button
//               className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
//              border-richblack-700"
//             >
//               Log in
//             </button>
//           </Link>
//         )}
//         {
//           <Link to="/signup">
//             <button
//               className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
//              border-richblack-700"
//             >
//               sign up
//             </button>
//           </Link>
//         }
//         {isLoggedIn && (
//           <Link to="/">
//             <button
//               onClick={() => {
//                 setLoggedIn(false);
//                 toast.success("Logged out");
//               }}
//               className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
//              border-richblack-700"
//             >
//               Logout
//             </button>
//           </Link>
//         )}
//         {isLoggedIn && (
//           <Link to="/dashboard">
//             <button
//               className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border
//              border-richblack-700"
//             >
//               Dashboard
//             </button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

