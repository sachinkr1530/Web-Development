import React from "react"
import { useNavigate } from "react-router-dom";
const Support=()=>{
     const navigate = useNavigate();

  function clickHandler() {
    navigate("/Labs");
  }
    function backHandler() {
    navigate(-1);
  }

    return(
      <div>
          <div>
            <h1>Support Page</h1>
        </div>
       <button  onClick={clickHandler}>Move to Labs page</button>
       <br/>
       <button onClick={backHandler}>Go back</button>
      </div>
    )

}
export default Support;