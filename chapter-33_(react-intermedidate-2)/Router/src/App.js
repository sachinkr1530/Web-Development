//  React Router =>  navigate between different pages or sections without refreshing the entire page.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import { Link, NavLink } from "react-router-dom";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Labs">Labs</NavLink>
          </li>
          {/* <li>
            <NavLink to="/notfound">NotFound</NavLink>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
        {/*  this is your default router */}
        <Route index element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/Labs" element={<Labs />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<div>404 Not Found Page</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
