import React from "react";
import "./SideMenu.css";

export const SideMenu = () => {
  return (
    <div>
      <div className="sideMenu">
        <div>
          <div id="logo">LOGO</div>
          <div id="menu">
            <p style={{color: "#6AB4F8"}}>
              <i className="fa-solid fa-house"></i>  Property 
            </p>

            <p>
              <i className="fa-regular fa-bell"></i>  PPD Assistance
            </p>
            <p>
              <i className="fa-solid fa-download"></i>  Recived Interset
            </p>

            <p>
              <i className="fa-solid fa-upload"></i>  Sent Interset
            </p>
            <p>
              <i className="fa-solid fa-eye"></i>  Property Views
            </p>
            <p>
              <i className="fa-solid fa-tag"></i>  Tarrif Plans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
