import React from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const SupAllService = () => {
  const tableHeaders = ["User Name", "Location", "Mobile No.", "View Details"];
  const tableData = [
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <SupDash />
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "22%", sm: "12%", md: "8%", lg: "10%" },
            marginLeft: { xs: "5%", sm: "1%", md: "30%", lg: "15%" },
            color: Colors.palette.secondary.main,
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "inherit" },
            fontWeight: "600",
          }}
        >
          All Services
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "5%", sm: "2%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          <Table data={tableData} headers={tableHeaders} />
        </Box>
      </Box>
    </>
  );
};

export default SupAllService;
