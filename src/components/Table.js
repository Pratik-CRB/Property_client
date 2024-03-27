import React, { useEffect, useState } from "react";
import "./Table.css";
import PropertyDetailsView from "./PropertyDetailsView";


export const Table = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [PropertyDetailsById, setPropertyDetailsById] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scheme, setScheme] = useState("");

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = (e) => {
    setIsDialogOpen(false);
  };
  useEffect(() => {
    fetch("https://property-server-x6yz.onrender.com/Property/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => setPropertyList(response));
  }, []);

  const getPropertDetails = (e)=>{
    let tr = e.target.closest('tr');
    let td = tr.querySelector('#propertyId');
    let propertyId = td.textContent;
    let viewScheme = tr.querySelector('#viewPropertyDetails');
    if (viewScheme.id === "viewPropertyDetails"){
      console.log(viewScheme);
      setScheme("views");
    }

    fetch ("https://property-server-x6yz.onrender.com/Property/PropertyDetailsById", {
      method : "POST",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({_id: propertyId})
    }).then((data) => data.json())
    .then((response) => {
      setPropertyDetailsById(response);
      openDialog();
  });
  };
  const getPropertForDetails = (e)=>{
    let tr = e.target.closest('tr');
    let td = tr.querySelector('#propertyId');
    let propertyId = td.textContent;
    let editScheme = tr.querySelector('#editPropertyDetails');
    if (editScheme.id === "editPropertyDetails"){
      console.log(editScheme);
      setScheme("edit");
    }

    fetch ("https://property-server-x6yz.onrender.com/Property/PropertyDetailsById", {
      method : "POST",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({_id: propertyId})
    }).then((data) => data.json())
    .then((response) => {
      setPropertyDetailsById(response);
      openDialog();
  });
  };
  return (
    <>
      <div className="table">
        <table className="table-head">
          <thead className="head">
            <tr>
              <th>PPD ID</th>
              <th>Image</th>
              <th>Property</th>
              <th>Contact</th>
              <th>Area</th>
              <th>Views</th>
              <th>Status</th>
              <th>Days Left</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
          {propertyList.map((val, key) => {
            return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>
                        <img src="../../public/img/property1.jpg" alt="img" />
                      </td>
                      <td style={{display: "none"}} id="propertyId">{val._id}</td>
                      <td>{val.PropertyType}</td>
                      <td>{val.Mobile}</td>
                      <td>{val.Area}</td>
                      <td>02</td>
                      <td id="Status">Sold</td>
                      <td>03</td>
                      <td>
                        <span><i className="fa-regular fa-eye" id="viewPropertyDetails" onClick={getPropertDetails}></i></span>
                        <span><i className="fa-solid fa-pencil" id="editPropertyDetails" onClick={getPropertForDetails}></i></span>
                      </td>
                    </tr>
            );
          })}

          </tbody>
        </table>
      </div>
      {isDialogOpen && (
        <PropertyDetailsView 
        PropertyDetailsById={PropertyDetailsById}
        onClose={closeDialog}
        scheme={scheme}
      />
      )}
    </>
  );
};
