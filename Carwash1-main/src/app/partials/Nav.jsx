import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Colors from "../utils/colors";
import DrawerComp from "./Drawer";
import { NavLink } from "react-router-dom";
import Logo from "../assests/images/Logo.png";

const Nav = () => {
  const buttonStyle = {
    backgroundColor: Colors.palette.primary.darkBlue,
    color: Colors.palette.primary.main,
    "&:hover": {
      backgroundColor: Colors.palette.primary.lightBlue,
    },
    "&.active": {
      backgroundColor: Colors.palette.primary.main,
      color: Colors.palette.secondary.black,
    },
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: Colors.palette.primary.darkBlue }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.primary.main,
                }}
              >
                <img
                  src={Logo}
                  alt=""
                  style={{
                    marginTop: "15px",
                    width: "150px",
                    maxWidth: "100%",
                    height: "50px",
                  }}
                />
              </NavLink>
            </Typography>

            <Box
              sx={{
                justifyContent: "center",
                gap: { md: "30px" },
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Button
                component={NavLink}
                to="/"
                exact
                activeClassName="active"
                sx={buttonStyle}
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/services"
                activeClassName="active"
                sx={buttonStyle}
              >
                Services
              </Button>

              <Button
                component={NavLink}
                to="/aboutus"
                activeClassName="active"
                sx={buttonStyle}
              >
                About Us
              </Button>
              <Button
                component={NavLink}
                to="/contactus"
                activeClassName="active"
                sx={buttonStyle}
              >
                Contact Us
              </Button>
              <Button
                sx={{
                  backgroundColor: Colors.palette.primary.red,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.lightBlue,
                    // color: Colors.palette.primary.red,
                  },
                }}
              >
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  Login
                </NavLink>
              </Button>

              <Button
                sx={{
                  backgroundColor: Colors.palette.primary.lightBlue,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.palette.primary.darkBlue,
                    // color: Colors.palette.primary.red,
                  },
                }}
              >
                <NavLink
                  to="/registerpage"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                  }}
                >
                  Register
                </NavLink>
              </Button>
            </Box>
            <DrawerComp />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
