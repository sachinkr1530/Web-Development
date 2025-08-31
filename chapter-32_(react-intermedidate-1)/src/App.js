import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event){
  //   // console.log(" First name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changelastHandler(event){
  //   // console.log("last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    // print
    console.log("Finally priniting the entireform ka data.........");
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First-name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last-name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />
        <textarea
          placeholder="Enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible ?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online-Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-mode">Offline-Mode</label>
        </fieldset>
        <label htmlFor="favCar">Tell Me Your Favourite Cars</label>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="">-- Select a car --</option>
          <option value="scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="RangRover">RangRover</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="TaTa">TaTa</option>
        </select>
        <br/>
        <br/>
        {/* <input type="submit" value="submit"></input> */}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
