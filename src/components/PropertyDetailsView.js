import React, { useState } from "react";
import "./PropertyDetailsView.css";

const PropertyDetailsView = ({ PropertyDetailsById, onClose, scheme }) => {
  const [form, setForm] = useState([]);

  const onFormChange = (fieldName, newValue) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));

    // Update PropertyDetailsById state
    PropertyDetailsById[fieldName] = newValue;
  };
  const handleUpdateProperty = (e) => {
    console.log(e.target);
    let mainDivForView = e.target
      .closest(".dialog-content")
      .querySelector(".mainDivForView");
    let BasicInfoView = mainDivForView.querySelector(".BasicInfoView");
    let PropertInfoView = mainDivForView.querySelector(".PropertInfoView");
    let LocationInfoView = mainDivForView.querySelector(".LocationInfoView");
    console.log("LocationInfoView:", LocationInfoView);
    let GeneralInfoView = mainDivForView.querySelector(".GeneralInfoView");
    // BasicInfoView
    let propertyType = BasicInfoView
      ? BasicInfoView.querySelector('select[name="PropertyType"]').value
      : "";
    console.log("propertyType:", propertyType);
    let Negotiable = BasicInfoView
      ? BasicInfoView.querySelector('select[name="Negotiable"]').value
      : "";
    console.log("Negotiable:", Negotiable);
    let Price = BasicInfoView
      ? BasicInfoView.querySelector('input[name="Price"]').value
      : "";
    console.log("Price:", Price);
    let Ownership = BasicInfoView
      ? BasicInfoView.querySelector('select[name="Ownership"]').value
      : "";
    console.log("Ownership:", Ownership);
    let PropertyAge = BasicInfoView
      ? BasicInfoView.querySelector('select[name="PropertyAge"]').value
      : "";
    console.log("PropertyAge:", PropertyAge);
    let PropertyApproved = BasicInfoView
      ? BasicInfoView.querySelector('select[name="PropertyApproved"]').value
      : "";
    console.log("PropertyApproved:", PropertyApproved);
    let PropertyDescription = BasicInfoView
      ? BasicInfoView.querySelector('input[name="PropertyDescription"]').value
      : "";
    console.log("PropertyDescription:", PropertyDescription);
    let BankLoan = BasicInfoView
      ? BasicInfoView.querySelector('select[name="BankLoan"]').value
      : "";
    console.log("BankLoan:", BankLoan);

    // PropertInfoView
    let Length = PropertInfoView
      ? PropertInfoView.querySelector('input[name="Length"]').value
      : "";
    console.log("Length:", Length);
    let Breadth = PropertInfoView
      ? PropertInfoView.querySelector('input[name="Breadth"]').value
      : "";
    console.log("Breadth:", Breadth);
    let Area = PropertInfoView
      ? PropertInfoView.querySelector('input[name="Area"]').value
      : "";
    console.log("Area:", Area);
    let AreaUnit = PropertInfoView
      ? PropertInfoView.querySelector('select[name="AreaUnit"]').value
      : "";
    console.log("AreaUnit:", AreaUnit);
    let NoOfBHK = PropertInfoView
      ? PropertInfoView.querySelector('select[name="NoOfBHK"]').value
      : "";
    console.log("NoOfBHK:", NoOfBHK);
    let NoOfFloor = PropertInfoView
      ? PropertInfoView.querySelector('select[name="NoOfFloor"]').value
      : "";
    console.log("NoOfFloor:", NoOfFloor);
    let PropertyOwnership = PropertInfoView
      ? PropertInfoView.querySelector('select[name="PropertyOwnership"]').value
      : "";
    console.log("PropertyOwnership:", PropertyOwnership);
    let Attached = PropertInfoView
      ? PropertInfoView.querySelector('select[name="Attached"]').value
      : "";
    console.log("Attached:", Attached);
    let WesternToilet = PropertInfoView
      ? PropertInfoView.querySelector('select[name="WesternToilet"]').value
      : "";
    console.log("WesternToilet:", WesternToilet);
    let Furnished = PropertInfoView
      ? PropertInfoView.querySelector('select[name="Furnished"]').value
      : "";
    console.log("Furnished:", Furnished);
    let CarParking = PropertInfoView
      ? PropertInfoView.querySelector('select[name="CarParking"]').value
      : "";
    console.log("CarParking:", CarParking);
    let Lift = PropertInfoView
      ? PropertInfoView.querySelector('select[name="Lift"]').value
      : "";
    console.log("Lift:", Lift);
    let Electricity = PropertInfoView
      ? PropertInfoView.querySelector('input[name="Electricity"]').value
      : "";
    console.log("Electricity:", Electricity);

    // LocationInfoView
    let Email = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Email"]').value
      : "";
    console.log("Email:", Email);
    let City = LocationInfoView
      ? LocationInfoView.querySelector('select[name="City"]').value
      : "";
    console.log("City:", City);
    let AreaType = LocationInfoView
      ? LocationInfoView.querySelector('select[name="AreaType"]').value
      : "";
    console.log("AreaType:", AreaType);
    let Pincode = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Pincode"]').value
      : "";
    console.log("Pincode:", Pincode);
    let Address = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Address"]').value
      : "";
    console.log("Address:", Address);
    let Landmark = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Landmark"]').value
      : "";
    console.log("Landmark:", Landmark);
    let Latitude = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Latitude"]').value
      : "";
    console.log("Latitude:", Latitude);
    let Longitude = LocationInfoView
      ? LocationInfoView.querySelector('input[name="Longitude"]').value
      : "";
    console.log("Longitude:", Longitude);

    // GeneralInfoView
    let Name = GeneralInfoView
      ? GeneralInfoView.querySelector('select[name="Name"]').value
      : "";
    console.log("Name:", Name);
    let Mobile = GeneralInfoView
      ? GeneralInfoView.querySelector('input[name="Mobile"]').value
      : "";
    console.log("Mobile:", Mobile);
    let PostedBy = GeneralInfoView
      ? GeneralInfoView.querySelector('select[name="PostedBy"]').value
      : "";
    console.log("PostedBy:", PostedBy);
    let SalesType = GeneralInfoView
      ? GeneralInfoView.querySelector('select[name="SalesType"]').value
      : "";
    console.log("SalesType:", SalesType);
    let FeaturedPackage = GeneralInfoView
      ? GeneralInfoView.querySelector('select[name="FeaturedPackage"]').value
      : "";
    console.log("FeaturedPackage:", FeaturedPackage);
    let PPD_Package = GeneralInfoView
      ? GeneralInfoView.querySelector('select[name="PPD_Package"]').value
      : "";
    console.log("PPD_Package:", PPD_Package);

    setForm({
      PropertyType: propertyType,
      Negotiable: Negotiable,
      Price: Price,
      Ownership: Ownership,
      PropertyAge: PropertyAge,
      PropertyApproved: PropertyApproved,
      PropertyDescription: PropertyDescription,
      BankLoan: BankLoan,

      Length: Length,
      Breadth: Breadth,
      Area: Area,
      AreaUnit: AreaUnit,
      NoOfBHK: NoOfBHK,
      NoOfFloor: NoOfFloor,
      PropertyOwnership: PropertyOwnership,
      Attached: Attached,
      WesternToilet: WesternToilet,
      Furnished: Furnished,
      CarParking: CarParking,
      Lift: Lift,
      Electricity: Electricity,

      Email: Email,
      City: City,
      AreaType: AreaType,
      Pincode: Pincode,
      Address: Address,
      Landmark: Landmark,
      Latitude: Latitude,
      Longitude: Longitude,

      Name: Name,
      Mobile: Mobile,
      PostedBy: PostedBy,
      SalesType: SalesType,
      FeaturedPackage: FeaturedPackage,
      PPD_Package: PPD_Package,
    });
    fetch("https://property-server-x6yz.onrender.com/Property/updateProperty", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.json())
      .then((response) => alert(JSON.stringify(response)));
  };

  console.log(form);
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <div className="mainDivForView">
          <div className="BasicInfoView">
            <div className="container">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Property Type</label>
                    <select
                      name="PropertyType"
                      value={PropertyDetailsById.PropertyType}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PropertyType", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Property Type</option>
                      <option value="plot">Plot</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Negotiable</label>
                    <select
                      name="Negotiable"
                      value={PropertyDetailsById.Negotiable}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Negotiable", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Negotiable</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Price</label>
                    <input
                      name="Price"
                      value={PropertyDetailsById.Price}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Price", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Ownership</label>
                    <select
                      name="Ownership"
                      value={PropertyDetailsById.Ownership}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Ownership", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Ownership</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Age</label>
                    <select
                      name="PropertyAge"
                      placeholder="Select Property Age"
                      value={PropertyDetailsById.PropertyAge}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PropertyAge", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Property Age</option>
                      <option value="first]">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Approved</label>
                    <select
                      name="PropertyApproved"
                      placeholder="Select Property Approved"
                      value={PropertyDetailsById.PropertyApproved}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PropertyApproved", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Property Approved</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Description</label>
                    <input
                      name="PropertyDescription"
                      value={PropertyDetailsById.PropertyDescription}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PropertyDescription", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Bank Loan</label>
                    <select
                      name="BankLoan"
                      value={PropertyDetailsById.BankLoan}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("BankLoan", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">Select Bank Loan</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="PropertInfoView">
            <div className="container">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Length</label>
                    <input
                      name="Length"
                      placeholder="Example : 1000"
                      value={PropertyDetailsById.Length}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Length", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Breadth</label>
                    <input
                      name="Breadth"
                      placeholder="Example : 1000"
                      value={PropertyDetailsById.Breadth}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Breadth", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Total Area</label>
                    <input
                      name="Area"
                      placeholder="Example : 7500"
                      value={PropertyDetailsById.Area}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Area", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Area Unit</label>
                    <select
                      name="AreaUnit"
                      placeholder="Area Unit"
                      value={PropertyDetailsById.AreaUnit}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("AreaUnit", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Area Unit--</option>
                      <option value="sq.m">sq.m</option>
                      <option value="sq.ft">sq.ft</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>No of BHK</label>
                    <select
                      name="NoOfBHK"
                      placeholder="Select No of BHK"
                      value={PropertyDetailsById.NoOfBHK}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("NoOfBHK", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select No of BHK--</option>
                      <option value="1">1BHK</option>
                      <option value="2">2BHK</option>
                      <option value="3">3BHK</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>No of Floor</label>
                    <select
                      name="NoOfFloor"
                      placeholder="Select No of Floor"
                      value={PropertyDetailsById.NoOfFloor}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("NoOfFloor", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select No of Floor--</option>
                      <option value="1">Ground</option>
                      <option value="2">G+1</option>
                      <option value="3">G+2</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Ownership</label>
                    <select
                      name="PropertyOwnership"
                      placeholder="Select Ownership"
                      value={PropertyDetailsById.Ownership}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PropertyOwnership", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Ownership--</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Attached</label>
                    <select
                      name="Attached"
                      placeholder="Select Attached"
                      value={PropertyDetailsById.Attached}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Attached", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Attached--</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Western Toilet</label>
                    <select
                      name="WesternToilet"
                      placeholder="Select Western Toilet"
                      value={PropertyDetailsById.WesternToilet}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("WesternToilet", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Western Toilet--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Furnished</label>
                    <select
                      name="Furnished"
                      placeholder="Select Furnished"
                      value={PropertyDetailsById.Furnished}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Furnished", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Furnished--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Car Parking</label>
                    <select
                      name="CarParking"
                      placeholder="Select Car Parking"
                      value={PropertyDetailsById.CarParking}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("CarParking", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Car Parking--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Lift</label>
                    <select
                      name="Lift"
                      placeholder="Select Lift"
                      value={PropertyDetailsById.Lift}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Lift", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Lift--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Electricity</label>
                    <input
                      name="Electricity"
                      placeholder="Example : 1phase"
                      value={PropertyDetailsById.Electricity}
                      type="Number"
                      min="1"
                      max="3"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Electricity", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Facing</label>
                    <select
                      name="Facing"
                      placeholder="Select Facing"
                      value={PropertyDetailsById.Facing}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Facing", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="">--Select Facing--</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="LocationInfoView">
            <div className="conatiner">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Email</label>
                    <input
                      name="Email"
                      placeholder="Email"
                      value={PropertyDetailsById.Email}
                      type="text"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Email", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>City</label>
                    <select
                      name="City"
                      placeholder="Select City"
                      value={PropertyDetailsById.City}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("City", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Kolkata">Kolkata</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Area</label>
                    <select
                      name="AreaType"
                      placeholder="Select Area"
                      value={PropertyDetailsById.AreaType}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("AreaType", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="City Center">City Center</option>
                      <option value="Downtown">Downtown</option>
                      <option value="Suburb">Suburb</option>
                      <option value="Outskirts">Outskirts</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Pincode</label>
                    <input
                      name="Pincode"
                      placeholder="Pincode"
                      value={PropertyDetailsById.Pincode}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Pincode", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Address</label>
                    <input
                      name="Address"
                      placeholder="Address"
                      value={PropertyDetailsById.Address}
                      type="text"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Address", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Landmark</label>
                    <input
                      name="Landmark"
                      placeholder="Landmark"
                      value={PropertyDetailsById.Landmark}
                      type="text"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Landmark", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Latitude</label>
                    <input
                      name="Latitude"
                      placeholder="Latitude"
                      value={PropertyDetailsById.Latitude}
                      type="number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Latitude", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Longitude</label>
                    <input
                      name="Longitude"
                      placeholder="Longitude"
                      value={PropertyDetailsById.Longitude}
                      type="number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Longitude", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="GeneralInfoView">
            <div className="conatiner">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Name</label>
                    <select
                      name="Name"
                      placeholder="Owner"
                      value={PropertyDetailsById.Name}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Longitude", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="Owner">Plot</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Mobile</label>
                    <input
                      name="Mobile"
                      placeholder="Enter Mobile Number"
                      value={PropertyDetailsById.Mobile}
                      type="Number"
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("Mobile", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Posted by</label>
                    <select
                      name="PostedBy"
                      value={PropertyDetailsById.PostedBy}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PostedBy", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Sales Type</label>
                    <select
                      name="SalesType"
                      value={PropertyDetailsById.SalesType}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("SalesType", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Featured Package</label>
                    <select
                      name="FeaturedPackage"
                      placeholder="Please Select "
                      value={PropertyDetailsById.FeaturedPackage}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("FeaturedPackage", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>PPD Package</label>
                    <select
                      name="PPD_Package"
                      placeholder="Please Select"
                      value={PropertyDetailsById.PPD_Package}
                      onChange={
                        scheme !== "views"
                          ? (e) => {
                              const newValue = e.target.value;
                              // console.log("Selected value:", newValue);
                              // Call the parent function to update the state
                              onFormChange("PPD_Package", newValue);
                            }
                          : null
                      }
                      readOnly={scheme === "views"}
                      required={scheme !== "views"}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {scheme === "views" ? (
          <button type="button" onClick={(e) => onClose(e)}>
            Close
          </button>
        ) : (
          <>
            <button
              type="button"
              id="update-prop"
              onClick={handleUpdateProperty}
            >
              Update
            </button>
            <button type="button" onClick={(e) => onClose(e)}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailsView;
