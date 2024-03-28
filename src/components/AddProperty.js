import React, { useState } from "react";
import { BasicInfo } from "./InputForm/BasicInfo";
import { PropertyDetails } from "./InputForm/PropertyDetails";
import { LocationInfo } from "./InputForm/LocationInfo";
import { GeneralInfo } from "./InputForm/GeneralInfo";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";
import "./AddProperty.css";

function AddProperty({ onSubmit, submitBtn }) {
  const steps = ["BasicInfo", "PropertyDetails", "LocationInfo", "GeneralInfo"];
  const [currentStep, setCurrentStep] = useState(0);
  let [btnText, setBtnText] = useState("Previous");
  let [nextBtn, setNextBtn] = useState("Save & Conitnue");
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(form);
    submitData(form);
  };
  const submitData = (e) => {
    fetch("https://property-server-x6yz.onrender.com/Property/addProperty", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.message == "success"){
          alert(response.message);
          //window.location.reload();
          navigate('/Body');
        }else{
          alert(response.message);
        }
      });
  };
  if (currentStep === 0) {
    setBtnText = "Cancel";
  } else {
    setBtnText = "Previous";
  }

  if (currentStep === steps.length - 1) {
    setNextBtn = "Add Property";
  } else {
    setNextBtn = "Save & Continue";
  }

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="AddPropertyBase">
      <div className="renderPartialViewPage">
        <h2>{steps[currentStep]}</h2>
        {currentStep === 0 && <BasicInfo onChange={handleChange} />}
        {currentStep === 1 && <PropertyDetails onChange={handleChange} />}
        {currentStep === 2 && <LocationInfo onChange={handleChange} />}
        {currentStep === 3 && <GeneralInfo onChange={handleChange} />}
      </div>
      <div className="stepProgressingBtns">
        <button
          className="btnCancel"
          style={currentStep === 0 ? { display: "block" } : { display: "none" }}
          onClick={submitBtn}
        >
          Cancel
        </button>
        <button
          className="prev-btn"
          disabled={currentStep === 0}
          style={currentStep === 0 ? { display: "none" } : { display: "block" }}
          onClick={handlePrevious}
        >
          {setBtnText}
        </button>
        <button
          className="nxt-btn"
          style={currentStep === 3 ? { display: "none" } : { display: "block" }}
          disabled={currentStep === steps.length - 1}
          onClick={handleNext}
        >
          {setNextBtn}
        </button>
        <button
          className="btnAddPropertySubmit"
          style={currentStep === 3 ? { display: "block" } : { display: "none" }}
          onClick={handleSubmit}
        >
          Add Property
        </button>
      </div>
    </div>
  );
}
export default AddProperty;
