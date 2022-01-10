import React from "react";
import ApartmentBanner from "../Home/ApartmentBanner/ApartmentBanner";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="my-5">
      <h1 className="alignment">Contact Us</h1>
      <div className="contact-container">
        <div className="contact">
          <div className="row mt-5">
            <div className="col-md-5">
              <div className="login-form mt-5">
                <form action="">
                  <input
                    className="input-field mt-3"
                    type="text"
                    placeholder="Your Name"
                  />
                  <br />
                  <input
                    className="input-field mt-3"
                    type="email"
                    placeholder="Your Email"
                  />
                  <br />
                  <input
                    className="input-field mt-3"
                    type="password"
                    placeholder="Your Password"
                  />
                  <br />
                  <input
                    className="submit-button mt-3"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-7">
              <div className="">
                <ApartmentBanner></ApartmentBanner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
