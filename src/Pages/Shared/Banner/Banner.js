import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../Video/pexels-kindel-media-7578552.mp4";
import banner1 from "../../../images/sale1.jpg";
import banner2 from "../../../images/sale2.jpg";
import banner3 from "../../../images/sale3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="mt-5">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={banner} type="video/mp4" />
        </video>
      </div>
      <div className="row my-5">
        <div className="col-md-5">
          <Carousel className="m-3 m-5">
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner2}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner3}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-4 banner">
          With a firm existence for more than three decades in the real estate
          sector of Rajasthan, Mahima Group has successfully established 31
          years of presence across the various verticals of infrastructural
          development. Having completed and delivered 8 Million Sq. Ft of area,
          currently, the firm has 3.16 Million Sq. ft. under construction. We
          have delivered timeless quality in the commercial developments with
          the four most popular Commercial Complexes that have now turned into
          the landmarks of the city. Not only have we ruled the builder market
          of luxurious livings but also delivered refined living in the
          affordable range.
        </div>
      </div>
    </section>
  );
};

export default Banner;
