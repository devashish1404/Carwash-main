import { Box, Container, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import crate1 from "../../assests/images/crate1.png";
import crate2 from "../../assests/images/crate2.png";
import crate3 from "../../assests/images/crate3.png";
import crate4 from "../../assests/images/crate4.png";
import Cardshome from "../../assests/images/cardshome.png";
import Colors from "../../utils/colors";

const HomeCards = () => {
  return (
    <>
      <Box
      // sx={
      //   {
      //     backgroundImage: `url(${Cardshome})`,
      //     backgroundSize: "contain",
      //     backgroundRepeat: "no-repeat",
      //     backgroundPosition: "center",
      //     opacity: 1,
      //     position: "relative",
      //     minHeight:"600px",
      //     zIndex: -1,
      //     "@media (max-width: 960px)": {
      //       backgroundImage: "none",
      //     },
      //   }
      // }
      >
        <Container sx={{ mt: 10 }}>
         
           <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography
                fontSize={50}
                color={Colors.palette.secondary.main}
                textAlign={"center"}
                sx={{ ml: 3 }}
              >
                <b>Our Washing Services</b>
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize={16}
                color={Colors.palette.secondary.main}
                textAlign={"center"}
                sx={{ marginTop: "16%", ml: 3 }}
              >
                WITH
                <b> MODERN EQUIPMENT</b>
              </Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={5} justifyContent={"center"} mt={2}>
            {/* .......Card No. 1 */}
            <Grid item>
              <Paper
                // elevation={10}
                sx={{
                  height: 290,
                  width: 240,
                  borderRadius: 5,
                  padding: 1,
                  background:
                    "linear-gradient(30deg, #FFFFFF 40%, #E3E1E1 60%)",
                }}
              >
                <Typography textAlign={"center"}>
                  <Box
                    component={"img"}
                    src={crate1}
                    sx={{ height: 100, width: 100, mt: 1 }}
                  />
                </Typography>
                <Typography
                  fontSize={17}
                  color={Colors.palette.secondary.main}
                  textAlign={"center"}
                  mt={2}
                >
                  <b>Contactless Washing</b>
                </Typography>
                <Typography fontSize={15} textAlign={"center"} mt={1}>
                  Vestibulum tortor risus, rutrum at congue sed ultricies
                  finibus.
                </Typography>
                <Typography mt={2} textAlign={"center"}>
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    sx={{ color: Colors.palette.secondary.main }}
                  />
                </Typography>
              </Paper>
            </Grid>
            {/* .......Card No. 2 */}
            <Grid item>
              <Paper
                // elevation={10}
                sx={{
                  height: 290,
                  width: 240,
                  borderRadius: 5,
                  padding: 1,
                  backdropFilter: "blur(10%)",
                  background:
                    "linear-gradient(30deg, #FFFFFF 10%, #B3A8A8 90%)",
                }}
              >
                <Typography textAlign={"center"}>
                  <Box
                    component={"img"}
                    src={crate2}
                    sx={{ height: 100, width: 100, mt: 1 }}
                  />
                </Typography>
                <Typography
                  fontSize={17}
                  color={Colors.palette.secondary.main}
                  textAlign={"center"}
                  mt={2}
                >
                  <b>Safety Materials</b>
                </Typography>
                <Typography fontSize={15} textAlign={"center"} mt={1}>
                  Cras aliquam tristique metus, eu gravida diam vestibulum
                  gravida.
                </Typography>
                <Typography mt={2} textAlign={"center"}>
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    sx={{ color: Colors.palette.secondary.main }}
                  />
                </Typography>
              </Paper>
            </Grid>
            {/* .......Card No. 3 */}
            <Grid item>
              <Paper
                // elevation={10}
                sx={{
                  height: 290,
                  width: 240,
                  borderRadius: 5,
                  padding: 1,
                  backdropFilter: "blur(10%)",
                  background:
                    "linear-gradient(30deg, #e6e3e3 30%, #c4bbbb 60%)",
                }}
              >
                <Typography textAlign={"center"}>
                  <Box
                    component={"img"}
                    src={crate3}
                    sx={{ height: 100, width: 100, mt: 1 }}
                  />
                </Typography>
                <Typography
                  fontSize={17}
                  color={Colors.palette.secondary.main}
                  textAlign={"center"}
                  mt={2}
                >
                  <b>Modern Equipment</b>
                </Typography>
                <Typography fontSize={15} textAlign={"center"} mt={1}>
                  Fusce maximus molestie nisl, ut dapibus libero vestibulum
                  aliquam.
                </Typography>
                <Typography mt={2} textAlign={"center"}>
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    sx={{ color: Colors.palette.secondary.main }}
                  />
                </Typography>
              </Paper>
            </Grid>
            {/* .......Card No. 4 */}
            <Grid item>
              <Paper
                // elevation={10}
                sx={{
                  height: 290,
                  width: 240,
                  borderRadius: 5,
                  padding: 1,
                  backdropFilter: "blur(10%)",
                  background:
                    "linear-gradient(30deg, #cccaca 40%, #c2baba 60%)",
                }}
              >
                <Typography textAlign={"center"}>
                  <Box
                    component={"img"}
                    src={crate4}
                    sx={{ height: 100, width: 100, mt: 1 }}
                  />
                </Typography>
                <Typography
                  fontSize={17}
                  color={Colors.palette.secondary.main}
                  textAlign={"center"}
                  mt={2}
                >
                  <b>Extensive Cleaning</b>
                </Typography>
                <Typography fontSize={15} textAlign={"center"} mt={1}>
                  Sestibulum non dolor sit amet mi moles tincidunt vel non
                  velit.
                </Typography>
                <Typography mt={2} textAlign={"center"}>
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    sx={{ color: Colors.palette.secondary.main }}
                  />
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeCards;
