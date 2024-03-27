import React, { useState } from "react";
import "./GeneralInfo.css";

export const GeneralInfo = ({onChange}) => {
  // const [form, setForm] = useState({});

  return (
    <>
      <div className="conatiner">
        <form>
          <div className="details">
            <div className="input">
              <label>Name</label>
              <select
                name="Name"
                placeholder="Owner"
                required
                onChange={onChange}
              >
                <option value="">--Select Name--</option>
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
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Posted by</label>
              <select
                name="PostedBy"
                required
                onChange={onChange}
              >
              <option value="">--Select PostedBy--</option>
                <option value="Yes">Owner</option>
                <option value="No">Agency</option>
              </select>
            </div>
            <div className="input">
              <label>Sales Type</label>
              <select
                name="SalesType"
                required
                onChange={onChange}
              >
                <option value="">--Select SalesType--</option>
                <option value="first">first</option>
                <option value="second">second</option>
              </select>
            </div>
            <div className="input">
              <label>Featured Package</label>
              <select
                name="FeaturedPackage"
                placeholder="Please Select "
                required
                onChange={onChange}
              >
                <option value="">FeaturedPackage</option>
                <option value="first">first</option>
                <option value="second">second</option>
              </select>
            </div>
            <div className="input">
              <label>PPD Package</label>
              <select
                name="PPD_Package"
                placeholder="Please Select"
                required
                onChange={onChange}
              >
                <option value="">-- Select PPD --</option>
                <option value="first">first</option>
                <option value="second">second</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
