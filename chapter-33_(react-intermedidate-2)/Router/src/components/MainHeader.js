import React from "react";
import { Outlet } from "react-router-dom";
const MainHeader = () => {
  return(
        <div>
            <Outlet/>
            {/* <h1>Main Page</h1> */}
        </div>
    )
};

export default MainHeader;
