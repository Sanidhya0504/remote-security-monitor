import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import Dashboard from "./components/user.dashboard";
import HomeDash from "./components/dashboar.components/dashboard.home";
import AddDevice from "./components/dashboar.components/pages/add";
import Devices from "./components/dashboar.components/pages/device";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner"> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/dashboard/add" element={<AddDevice />} />
        <Route path="/user/dashboard/devices" element={<Devices />} />
      </Routes>
      {/* </div>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
