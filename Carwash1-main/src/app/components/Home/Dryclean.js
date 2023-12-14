import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import wolks from "../../assests/images/wolks.png";
import Colors from "../../utils/colors";

const Dryclean = () => {
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid container item spacing={3} alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
                sx={{ color: Colors.palette.secondary.main }}
              >
                <b>Dry Cleaning Any Dirt <br/>Inside The Car.</b>
              </Typography>
              <Typography
                fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
                mt={3}
                sx={{ color: Colors.palette.secondary.grey,lineHeight: "1.8" }}
              >
                Our dry and dirt cleaning process employs state-of-the-art{" "}
                <br />
                technology and eco-friendly solutions to gently remove grime and{" "}
                <br />
                restore your vehicle's pristine shine.
                <br />
                <br /> Using advanced techniques, we eliminate dirt effectively
                while
                <br /> preserving your car's finish, ensuring a thorough clean
                without <br />
                compromising its integrity. Experience superior care with our
                dry
                <br /> and dirt cleaning service.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              src={wolks}
              alt="Car"
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dryclean;
