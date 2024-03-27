import React from 'react'

export const ViewDetails = () => {
 
    const [propertyList, setPropertyList] = useState([]);

useEffect(() => {
  fetch("https://property-server-x6yz.onrender.com/Property/all", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((response) => setPropertyList(response));
}, []);
    
}
