import React from "react";
import "./Design.css";
import design1 from "../../../images/design1.png";
import design12 from "../../../images/design12.png";
import design2 from "../../../images/design2.png";
import design3 from "../../../images/design3.png";

const Design = () => {
  return (
    <div className="my-5">
      <div className="row item2">
        <div className="col-md-3 col-sm-12">
          <div className="card item1  h-75 m-2 pb-5">
            <div class="card-body text-center">
              <img src={design1} className="h-30 w-25" alt="" />
              <h5 class="card-title">Duplex Layout</h5>
              <p class="card-text">
                <small>
                  An apartment with three floors can be referred to as a
                  triplex.Strangely however, and rather confusingly, in the USA,
                  a 'duplex' is a dwelling.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="card item1  h-75 m-2 pb-5">
            <div class="card-body text-center">
              <img src={design12} className="h-30 w-25" alt="" />
              <h5 className="card-title">High-Level Security</h5>
              <p className="card-text">
                The system maintains a highly detailed access and authorization
                scheme defining Access control and system action.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="card item1 h-75 m-2 pb-5">
            <div class="card-body text-center">
              <img src={design2} className="h-30 w-25" alt="" />
              <h5 className="card-title">Royal Touch Paint</h5>
              <p className="card-text">
                Luxury is just a brushstroke away with Royale Luxury Emulsion.
                It’s the only paint emulsion in India equipped with Teflon
                surface.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="card item1 h-75 m-2 pb-5">
            <div class="card-body text-center">
              <img src={design3} className="h-30 w-25" alt="" />
              <h5 className="card-title">Large Playground</h5>
              <p className="card-text">
                Millions of Americans live in apartments. According to the
                National Apartment Association (NAA),39 million Americans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
