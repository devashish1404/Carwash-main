import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ServicesIcon from "@mui/icons-material/Work";
import AboutUsIcon from "@mui/icons-material/Info";
import ContactUsIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/PersonAdd";
import Colors from "../utils/colors";

const pages = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon sx={{ mr: 5 }} />,
  },
  {
    title: "Services",
    path: "/services",
    icon: <ServicesIcon sx={{ mr: 5 }} />,
  },
  {
    title: "About Us",
    path: "/aboutus",
    icon: <AboutUsIcon sx={{ mr: 5 }} />,
  },
  {
    title: "Contact Us",
    path: "/contactus",
    icon: <ContactUsIcon sx={{ mr: 5 }} />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon sx={{ mr: 5 }} />,
  },
  {
    title: "Register",
    path: "/registerpage",
    icon: <RegisterIcon sx={{ mr: 5 }} />,
  },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: 150, sm: 180, md: 230 },
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            backgroundColor: Colors.palette.primary.main,
            color: Colors.palette.secondary.black,
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              component={NavLink}
              to={page.path}
              activeClassName="active"
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: Colors.palette.primary.main,
          marginRight: "10px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
