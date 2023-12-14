import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import car from "../assests/Video/carwash.mp4";
import Colors from "../utils/colors";
import HomeSearcher from "../components/Home/HomeSearcher";

const BackgroundImg = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          minHeight: "500px",
        }}
      >
        <video
          src={car}
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: Colors.palette.primary.darkBlue,
            opacity: "0.1",
            zIndex: -1,
          }}
        ></div>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            padding={"2%"}
            sx={{ marginInline: { xs: "0%", sm: "0%" }, mt: "8%" }}
          >
            <Container>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, color: Colors.palette.primary.main }}
              >
                Get Your Car <br /> The Best Ever Wash
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={8} padding={"2%"}>
            <Container>
              <HomeSearcher />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BackgroundImg;
