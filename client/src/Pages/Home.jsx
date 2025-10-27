import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import JobListing from "../Components/JobListing";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <JobListing />
    </div>
  );
};

export default Home;
