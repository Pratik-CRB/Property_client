import React, { useState } from "react";
import "./BasicInfo.css";

export const BasicInfo = ({onChange}) => {
  // const [form, setForm] = useState({});

  return (
    <>
      <div className="container">
        <form>
          <div className="details">
            <div className="input">
              <label>Property Type</label>
              <select
                name="PropertyType"
                placeholder="Select Property Type"
                required
                onChange={onChange}
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
                placeholder="Select Negotiable"
                required
                onChange={onChange}
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
                placeholder="Example: 1000000"
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Ownership</label>
              <select
                name="Ownership"
                placeholder="Select Ownership"
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
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
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Bank Loan</label>
              <select
                name="BankLoan"
                placeholder="Select Bank Loan"
                required
                onChange={onChange}
              >
                <option value="">Select Bank Loan</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
