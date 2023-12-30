import React from "react";
import mainimage from "../assests/fortnite-pictures-b5kfcchwazwiz3cs 1.png";
import "../styles/header.css";

function Header() {
  return (
    <div className="header  text-center">
      <div className="h2 pt-5">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </div>
      <div style={{ marginTop: "2rem" }}>
        <img className="image-div" src={mainimage} alt=""></img>
      </div>
      <div className="h5 px-5" style={{ marginTop: "2rem" }}>
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </div>

      <div className="btn bg-white round-0  mt-4 px-5  ">Visit Website</div>
    </div>
  );
}

export default Header;
