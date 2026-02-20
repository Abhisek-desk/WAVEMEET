import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>WaveMeet</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">Login</div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h2>
            <span style={{ color: "#ff9839" }}>Connect </span>with your loved
            Ones
          </h2>
          <p>Cover a distance by WaveMeet</p>
          <div>
            <Link to={"/auth"}> Get Started</Link>
          </div>
        </div>
        <div role="button">
            <img src="./public/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
