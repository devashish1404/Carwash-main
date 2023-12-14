import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import vector from "../../assests/images/Vector.png";
import vector2 from "../../assests/images/Vector2.png";
import HomeCards from "../Home/HomeCards";
import Nav from "../../partials/Nav";
import AboutUsImg from "../../assests/images/About.png";
import doubleinverted from "../../assests/images/doubleinverted.png";
import car2 from "../../assests/images/AboutCar.png";
import Dryclean from "./Dryclean";
import Question from "../Question";
import Footer from "../../partials/Footer";
import Colors from "../../utils/colors";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${AboutUsImg})`,
          backgroundSize: "cover",
          minHeight: "400px",
          backgroundPosition: "center",
          // position: "relative",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            justifyContent="center"
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            {/* <Container>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, color: Colors.palette.primary.main }}
              >
                About Us
              </Typography>
            </Container> */}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={4} sx={{ marginTop: "3%" }}>
          {" "}
          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant="h4"
              sx={{ marginLeft: "5%", color: Colors.palette.secondary.main }}
              gutterBottom
            >
              <b> About Us</b>
            </Typography>

            <Typography
              variant="body1"
              sx={{ marginLeft: "5%", lineHeight: "1.8" }}
            >
              Welcome to our premier car wash service center in Noida. We offer
              an unparalleled car cleaning experience with three comprehensive
              packages: Routine clean, Dry clean, and Deep clean. Our
              cutting-edge technology and skilled staff ensure top-notch results
              for every vehicle. For added convenience, we provide pick-up and
              drop-off services exclusively for deep cleans, allowing you to
              focus on your day while we pamper your car. At our center,
              customer satisfaction is our priority, and we take pride in
              delivering excellence in every wash. Join us to experience the
              ultimate care for your vehicle with our professional and reliable
              services. Book now for a spotless, shining car ready to hit the
              road, and let us elevate your driving experience today.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ position: "auto" }}>
            <img
              src={car2}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
                marginTop: { xs: "0%", sm: "10%" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* {..........................................................} */}
      <Container sx={{ mt: 15 }}>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item xs={12} sm={12} md={6}>
               <Box
        component="img"
        src={vector}
        alt="Vector"
        width="80%"
        height="auto"
        sx={{
          display: {
            xs: "none", 
            md: "block",
          },
        }}
      />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 25, sm: 30, md: 35, lg: 37, xl: 37 },
                  color: Colors.palette.secondary.main,
                }}
              >
                <b>Professional Washing And Cleaning.</b>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 12, md: 13, lg: 15, xl: 15 },
                  color: Colors.palette.secondary.grey,
                  lineHeight: "1.8",
                }}
                mt={3}
              >
                For professional cleaning services or inquiries, get in touch
                with <br />
                us at our Noida center. Our dedicated team is ready to assist
                you.
                <br />
                <br /> Contact us via phone or email to schedule your car's
                pampering
                <br /> session or to learn more about our specialized cleaning
                services. <br />
                Your satisfaction is our priority.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: Colors.palette.secondary.main,
                  color: Colors.palette.primary.main,
                  height: 45,
                  width: {
                    xl: "170px",
                    lg: "170px",
                    md: "170px",
                    sm: "170px",
                    xs: "170px",
                  },
                  mt: 5,
                }}
              >
                +91 7017866149
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  border: `1.5px solid ${Colors.palette.secondary.main}`,
                  background: Colors.palette.primary.main,
                  color: Colors.palette.secondary.black,
                  height: 45,
                  width: {
                    xl: "170px",
                    lg: "170px",
                    md: "170px",
                    sm: "170px",
                    xs: "170px",
                  },
                  mt: 5,
                  ml: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.main,
                  },
                }}
              >
                <NavLink
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  Our Services
                </NavLink>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
      <Box
        component="img"
        src={vector}
        alt="Vector"
        width="80%"
        height="auto"
        sx={{
          display: {
            xs: "block",
            md: "none", 
          },
        }}
      />
    </Grid>
        </Grid>
      </Container>

      <Dryclean />
      <HomeCards />

      {/* ..................................................................... */}

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container item spacing={10} justifyContent={"center"}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                backgroundImage: `url(${vector2})`,
                backgroundSize: "cover",
                height: 250,
                width: 250,
                backgroundPosition: "center",
              }}
            />
          </Grid>

          <Grid item>
            <Box width={{ xs: 250, sm: 500, md: 700, lg: 800, xl: 800 }}>
              <Typography
                fontSize={{ xs: 25, sm: 30, md: 32, lg: 35, xl: 35 }}
                color={Colors.palette.secondary.main}
              >
                <b>Who We Are?</b>
              </Typography>
              <Typography
                fontSize={{ xs: 12, sm: 12, md: 13, lg: 15, xl: 15 }}
                mt={3}
                sx={{ color: Colors.palette.secondary.grey, lineHeight: "1.8" }}
              >
                “Our aim is to redefine car care, providing unmatched quality
                and convenience. We strive to
                <br /> ensure a seamless, top-tier experience for our customers,
                setting new standards in the industry
                <br /> with our innovative approach and customer-centric
                services.”
                <br />
                <br />
              </Typography>

              <Typography
                fontSize={{ sm: 12, md: 13, lg: 18 }}
                mt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={doubleinverted}
                  alt=""
                  style={{ marginRight: "2%" }}
                />
                "Drive clean, drive happy. We make your journey shine."
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Question />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
