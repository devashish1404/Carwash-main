// import React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box, Container } from "@mui/material";
// import Colors from "../utils/colors";
// import { NavLink } from "react-router-dom";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     textAlign: "center",
//     fontSize: "18px",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     textAlign: "center",
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },

//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// export default function Tables({ data, headers }) {
//   return (
//     <>
//       <Container>
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               backgroundColor: Colors.palette.secondary.cardBackground,
//               padding: "20px",
//             }}
//           >
//             <TableContainer component={Paper}>
//               <Table aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     {headers.map((header, index) => (
//                       <StyledTableCell
//                         key={index}
//                         style={{
//                           backgroundColor: Colors.palette.secondary.main,
//                           color: Colors.palette.primary.main,
//                         }}
//                       >
//                         {header}
//                       </StyledTableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {data.map((row, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell component="th" scope="row">
//                         {row.d1}
//                       </StyledTableCell>
//                       <StyledTableCell>{row.d2}</StyledTableCell>
//                       <StyledTableCell>{row.d3}</StyledTableCell>
//                       <StyledTableCell>{row.d4}</StyledTableCell>
//                       <StyledTableCell>
//                         <NavLink
//                           to="/"
//                           style={{
//                             textDecoration: "none",
//                             color: Colors.palette.primary.lightBlue,
//                           }}
//                         >
//                           {row.viewdetails}
//                         </NavLink>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         {row.icons}
//                         {row.icons}
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//         </Container>
//       </Container>
//     </>
//   );
// }

import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize:"18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomTable({ data, headers }) {
  return (
    <Container>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: Colors.palette.secondary.cardBackground,
            padding: "20px",
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  {headers.map((header, index) => (
                    <StyledTableCell
                      key={index}
                      style={{
                        backgroundColor: Colors.palette.secondary.main,
                        color: Colors.palette.primary.main,
                      }}
                    >
                      {header}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <StyledTableCell key={cellIndex}>
                        {cell}
                      </StyledTableCell>
                    ))}
                    {/* <StyledTableCell>
                      <NavLink to="/">{row.viewdetails}</NavLink>
                    </StyledTableCell> */}
                    {/* <StyledTableCell>
                      {row.icons}
                      {row.icons}
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Container>
  );
}
