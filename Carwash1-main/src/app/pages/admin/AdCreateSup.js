import React from "react";
import AdminDash from "../../components/AdDash";
import EditSuperVisorCredentials from "../../components/EditSupervisorCredentials";
import Colors from "../../utils/colors";

import { Box, Typography } from "@mui/material";

const AdCreateSup = () => {
 

  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
        sx={{
          background: Colors.palette.secondary.cardBackground,
          padding: "20px",
        }}
      >
        <AdminDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "1%", sm: "1%", md: "25%", lg: "15%" },
            marginTop: { xs: "15%", sm: "15%", md: "10%", lg: "5%" },
          }}
        >
          <EditSuperVisorCredentials />
        </Box>
      </Box>
    </>
  );
};

export default AdCreateSup;
