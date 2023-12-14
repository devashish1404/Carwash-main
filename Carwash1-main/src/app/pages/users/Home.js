import React from "react";
import BackgroundImg from "../../components/Background";
import Nav from "../../partials/Nav";
import Question from "../../components/Question";
import Footer from "../../partials/Footer";
import Card1 from "../../components/Card";
import AboutGuest from "../../components/About";
import Review from "../../components/Review";
import Work from "../../components/Work";
const Home = () => {
  return (
    <>
      <Nav />
      <BackgroundImg />
      <AboutGuest />
      <Card1 />
      <Work/>
      <Review />
      <Question />
      <Footer />
    </>
  );
};

export default Home;
