import React, { useEffect, useState } from "react";
import "./ServiceItems.css";

const ServiceItems = () => {
  const [serviceItems, setServiceItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allServiceItems")
      .then((res) => res.json())
      .then((data) => setServiceItems(data));
  }, []);
  console.log(serviceItems);
  return (
    <div className="design1 mt-3">
      <div className="container">
        <div className="text-center my-3">
          <span className="design4">OUR SERVICES</span>
          <h2>Our All Services</h2>
          <div className="row">
            {serviceItems?.map((pd, index) => (
              <div className="col-md-4 col-sm-12">
                <div className="card p-3 design2">
                  <img
                    className="w-100 h-75 p-2"
                    src={pd?.imageURL}
                    alt="Images"
                  />
                  <h3 className="design4">{pd.name}</h3>
                  <p className="design3">{pd.description}</p>
                  <a href="#" className="read-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
