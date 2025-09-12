import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing the alue of Form Data:");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2 ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName"> First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Sachin"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName"> Last Name</label>

        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Thakur"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="email"> Email Address</label>
        <br />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="sachin@123asdgmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="Country"> Country</label>
        <br />

        <select
          id="Country"
          name="Country"
          value={formData.Country}
          onChange={changeHandler}
          className="outline"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <br />
        <label htmlFor="streetAddress"> streetAddress</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-34C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="city"> city</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Motihari"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="state"> state</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="postalCode"> postalCode</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex ">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to Your Mobile Phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            // checked={formData.pushNotification === "Everything"}
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            // checked={formData.pushNotification === "Everything"}
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            // checked={formData.pushNotification === "Everything"}
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
          <br />
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 ">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
