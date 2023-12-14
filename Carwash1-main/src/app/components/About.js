import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Colors from "../utils/colors";
import car1 from "../assests/images/AboutCar.png";
import { NavLink } from "react-router-dom";

const AboutGuest = () => {
  return (
    <Box>
      <Grid container spacing={4} sx={{ mt: 5 }}>
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
            Welcome to our premier car wash service center in Noida. We offer an
            unparalleled car cleaning experience
            <br /> with three comprehensive packages: Routine clean, Dry clean,
            and Deep clean. Our cutting-edge
            <br />
            technology and skilled staff ensure top-notch results for every
            vehicle. For added convenience,
            <br /> we provide pick-up and drop-off services exclusively for deep
            cleans, allowing you to focus <br />
            on your day while we pamper your car....
            <NavLink
              to="/aboutus"
              style={{
                textDecoration: "none",
                color: Colors.palette.secondary.main,
              }}
            >
              (see more)
            </NavLink>
            {/* At our center, customer satisfaction
            is our priority, and we take pride in delivering excellence in every
            wash. Join us to experience the ultimate care for your vehicle with
            our professional and reliable services. Book now for a spotless,
            shining car ready to hit the road, and let us elevate your driving
            experience today. */}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
          <img
            src={car1}
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
  );
};

export default AboutGuest;
