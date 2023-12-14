import * as React from "react";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Colors from "../../utils/colors";
import Nav from "../../partials/Nav";
import Table from "../../components/Table";

export default function History() {
  return (
    <>
      <Nav />

      <Box
        sx={{
          textAlign: "center",
          marginBlock: "3rem",
          fontSize: "40px",
          fontWeight: "600",
          color: Colors.palette.primary.darkBlue,
        }}
      >
        History
      </Box>

      <Box>
        <Table />
      </Box>
    </>
  );
}
