import React, { useState } from "react";
import "./PropertyDetails.css";

export const PropertyDetails = ({ onChange }) => {
  // const [form, setForm] = useState({});
  return (
    <>
      <div className="container">
        <form>
          <div className="details">
            <div className="input">
              <label>Length</label>
              <input
                name="Length"
                placeholder="Example : 1000"
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Breath</label>
              <input
                name="Breadth"
                placeholder="Example : 1000"
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Total Area</label>
              <input
                name="Area"
                placeholder="Example : 7500"
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Area Unit</label>
              <select
                name="AreaUnit"
                placeholder="Area Unit"
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
              >
                <option value="">--Select Car Parking--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="input">
              <label>Lift</label>
              <select name="Lift" placeholder="Select Lift" onChange={onChange} required>
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
                type="Number"
                min="1"
                max="3"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Facing</label>
              <select
                name="Facing"
                placeholder="Select Facing"
                required
                onChange={onChange}
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
    </>
  );
};
