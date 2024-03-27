import React, {useRef, useState } from "react";
import "./LocationInfo.css";

export const LocationInfo = ({onChange}) => {
  // const [form, setForm] = useState({});

  const inputRef = useRef(null);
  const [img, setImg] = useState("");

  const handelImg = () => {
    inputRef.current.click();
  };

  // const handelImgChange = (event) => {
  //   const file = event.target.files[0];
  //   setImg(file);
  // };

  return (
    <>
      <div className="conatiner">
        <form>
          <div className="details">
            <div className="input">
              <label>Email</label>
              <input
                name="Email"
                placeholder="Email"
                type="text"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>City</label>
              <select
                name="City"
                placeholder="Select City"
                required
                onChange={onChange}
              >
                <option value="">--Select City--</option>
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
                required
                onChange={onChange}
              >
                <option value="">--Select Area--</option>
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
                type="Number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Address</label>
              <input
                name="Address"
                placeholder="Address"
                type="text"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Landmark</label>
              <input
                name="Landmark"
                placeholder="Landmark"
                type="text"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Latitude</label>
              <input
                name="Latitude"
                placeholder="Latitude"
                type="number"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="input">
              <label>Longitude</label>
              <input
                name="Longitude"
                placeholder="Longitude"
                type="number"
                required
                onChange={onChange}
              ></input>
            </div>
          </div>
        </form>
        <div className="div-img" onClick={handelImg} >
        {img ? (
          <img src={URL.createObjectURL(img)} alt="" />
        ) : (
          <i className="fa-solid fa-camera"></i>
          
        )}
        <input type="file" ref={inputRef} onChange={onChange} />
      </div>
      

      </div>
    </>
  );
};
