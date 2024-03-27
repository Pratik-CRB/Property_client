import React, { useState } from "react";
import "./Body.css";
import { SideMenu } from "./SideMenu";
import { Header } from "./Header";
import AddProperty from "./AddProperty";
import { BasicInfo } from "./InputForm/BasicInfo";
import { Table } from "./Table";

export const Body = () => {
  const [isAddPropertyVisible, setIsAddPropertyVisible] = useState(false);

  const handleButtonAddProperty = () => {
    //console.log("hit here")
    setIsAddPropertyVisible(!isAddPropertyVisible); // Toggle the visibility state
    //console.log("hit here 2")
  };
  return (
    <div className="mainPageContent">
      <SideMenu />
      <div className="rightSideContents">
        <Header />
        <div className="Form-Content">
          <button
            className="btnAddProperty"
            style={{ display: isAddPropertyVisible ? "none" : "block" }}
            onClick={handleButtonAddProperty}
          >
            Add Property
          </button>
          <div
            className="Table-tbl"
            style={{ display: isAddPropertyVisible ? "none" : "block" }}
          >
            <Table />
          </div>
          <div
            className="AddProperty-add"
            style={{ display: isAddPropertyVisible ? "block" : "none" }}
          >
            <AddProperty submitBtn={handleButtonAddProperty} />
          </div>
        </div>
      </div>
    </div>
  );
};
