import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../../Shared/Banner/Banner";
import Design from "../Design/Design";
import ServiceItems from "../../ServiceItems/ServiceItems";
import ReviewShows from "../../Review/ReviewShows/ReviewShows";
import BannerDG from "./BannerDG/BannerDG";
import ServicesSlice from "../../ServicesSlice/ServicesSlice";

const Home = () => {
  return (
    <div>
      <h2>welcome to Noor Construction</h2>
      <Banner></Banner>
      <Design></Design>
      <ServiceItems></ServiceItems>
      <BannerDG></BannerDG>
      <ServicesSlice></ServicesSlice>
      <Contact></Contact>
      <ReviewShows></ReviewShows>
    </div>
  );
};
export default Home;
