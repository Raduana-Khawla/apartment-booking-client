import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSlice = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);
  console.log(services);

  return (
    <section className="bg mt-5">
      <div className="container my-5">
        <div className="section-title text-center">
          <h5 className="text-white pt-3">PROPERTY</h5>
          <h2>Our Property and Its Availabilities and All Other Details</h2>
        </div>
        <div className="row">
          {services?.map((pd, index) => (
            <div className="col-sm-12 col-md-4">
              <div className="property1 card rounded p-3">
                <div className="property-card-img">
                  <a href="property-details.html">
                    <img
                      className="w-100 rounded"
                      src={pd?.imageURL}
                      alt="Images"
                    />
                  </a>
                </div>
                <h4 className="m-3">Price: ${pd.price}/m</h4>
                <div className="content">
                  <h4>{pd.name}</h4>
                  <p>
                    <small>{pd.description}</small>
                  </p>
                  <ul className="d-flex justify-content-between">
                    <li>Dining: 01</li>
                    <li>Sq. feet: 120</li>
                    <li>Bathroom: 03</li>
                  </ul>
                  <ul className="d-flex justify-content-between">
                    <li>Garage: 01</li>
                    <li>Drawing: 03</li>
                    <li>Bathroom: 04</li>
                  </ul>
                </div>
                <div className="btn">
                  <Link to={`/service/${pd._id}`}>
                    {" "}
                    <button className="btn btn-success">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlice;
