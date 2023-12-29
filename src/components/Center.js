import React from "react";
import mask1 from "../assests/Mask group.png";
import mask2 from "../assests/Mask group (1).png";
import mask3 from "../assests/Mask group (2).png";
import "../styles/header.css";

function Center() {
  return (
    <div className="center-div mt-5">
      <div className="three-div row gx-lg-5 gx-md-4 gx-sm-3">
        <div className="col-lg-4 col-md-6 mb-lg-3 mb-md-3 mb-sm-3">
          <div className="d-flex flex-column">
            <img src={mask1} alt=""></img>
            <div>
              Explore large, destructible environments where no two games are ever the same.
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-3 mb-md-3 mb-sm-3">
          <div className="d-flex flex-column">
            <img src={mask2} alt=""></img>
            <div>
              Team up with friends by sprinting, climbing, and smashing your way to earn your Victory Royale
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 mb-lg-3 mb-md-3 mb-sm-3">
          <div className="d-flex flex-column">
            <img src={mask3} alt=""></img>
            <div>
              Discover even more ways to play across thousands of creator-made game genres
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
