import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Colors from "../utils/colors";
import { NavLink, useLocation } from "react-router-dom";
import Wave from "react-wavify";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assests/images/Logo.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Wave
        fill={Colors.palette.primary.darkBlue}
        paused={false}
        style={{
          display: "flex",
          marginTop: -20,
          borderBottom: `1px solid ${Colors.palette.primary.darkBlue}`,
        }}
        options={{
          height: 1,
          speed: 0.5,
          points: 3,
        }}
      />
      <Box
        sx={{
          backgroundColor: Colors.palette.primary.darkBlue,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ marginInline: "2%" }}>
            <Grid item xs={12} sm={6} md={3} sx={{ color: Colors.palette.primary.main }}>
              <img
                src={Logo}
                alt=""
               style={{
               width: "200px",
               padding: "2px",
                }}
              />
              <Typography sx={{ marginTop: "2%", fontSize: "12px" }}>
                Our premier car wash service center in Noida <br />
                offers an unparalleled car cleaning experience <br />
                with three comprehensive packages: Routine <br />
                clean, Dry clean, and Deep clean. Our cutting-
                <br />
                edge technology and skilled staff ensure top-
                <br />
                notch results for every vehicle
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2%",
                  color: Colors.palette.primary.main,
                }}
              >
                <CopyrightIcon sx={{ mr: 1, fontSize: "18px" }} /> 2021 Car Wash. All Rights Reserved
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" gutterBottom sx={{ color: Colors.palette.primary.main, marginTop: "5%", }}>
                <b> PAGES</b>
              </Typography>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%", 
                      sm: "11%", 
                    },
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Services
                </Typography>
              </NavLink>
              <NavLink to="/aboutus" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  About Us
                </Typography>
              </NavLink>
              <NavLink to="/contactus" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Contact Us
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" sx={{ color: Colors.palette.primary.main,marginTop:'5%' }}>
                <b> CARS</b>
              </Typography>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%", 
                      sm: "11%", 
                    },
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  HatchBack
                </Typography>
              </NavLink>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Sedan
                </Typography>
              </NavLink>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  SUV
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" sx={{ color: Colors.palette.primary.main,marginTop:'5%' }}>
                <b>SERVICES </b>
              </Typography>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%",  
                      sm: "11%",
                    },
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Routine Clean
                </Typography>
              </NavLink>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Dry Clean
                </Typography>
              </NavLink>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: Colors.palette.primary.main,
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Deep Clean
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3} marginBottom={5}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.grey,
                }}
              >
                +91 7017866149
              </Typography>

              <TextField
                placeholder="Type Your Email"
                type="text"
                sx={{ mt: "5%" }}
                variant="outlined"
                InputProps={{
                  sx: {
                    height: 38,
                    backgroundColor: "white",
                    width: "100%", // Adjust the width to your liking
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          height: 37,
                          color: "white",
                          "&:hover": { color: "black" },
                          position: "relative",
                          left: 14,
                        }}
                      >
                        <SendIcon sx={{ fontSize: 20 }} />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  marginTop: "5%",
                  color: Colors.palette.primary.main,
                }}
              >
                wowkaar@info.com
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  marginTop: "10%",
                  color: Colors.palette.secondary.grey,
                }}
              >
                Noida, NOIDA, Delhi NCR, UP
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                sx={{ marginTop: "10%", color: Colors.palette.primary.main }}
              >
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <InstagramIcon
                    sx={{
                      color: Colors.palette.primary.main,
                    }}
                  />
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <FacebookOutlinedIcon
                    sx={{
                      marginLeft: "10%",
                      color: Colors.palette.primary.main,
                    }}
                  />{" "}
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <YouTubeIcon
                    sx={{
                      marginLeft: "10%",
                      color: Colors.palette.primary.main,
                    }}
                  />{" "}
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <TwitterIcon
                    sx={{
                      marginLeft: "10%",
                      color: Colors.palette.primary.main,
                    }}
                  />
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  
};

export default Footer;
