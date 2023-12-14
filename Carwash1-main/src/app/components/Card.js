import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import OurServices from "../components/OurServices";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import BookingCard from "./card/Bookingcard";

const Card1 = () => {
  return (
    <>
      <OurServices />
      <Container sx={{ mt: 5 }}>
        <Grid container item spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <BookingCard shadowColor={Colors.palette.background.lightGreen}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  <b>
                    {" "}
                    Routine Clean
                    <br />₹ 199
                  </b>
                </Typography>
                <Typography>
                  <List>
                    <ListItem>
                      <DoneAllOutlinedIcon />
                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Exterior Wash, removing dust and grime."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Interior Vacuuming, dusting seats and carpets and floor mats."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Cleaning and Polishing all windows and mirrors."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Cleaning and Shining tires and rims."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Wiping down interior surfaces, including dashboard and door panels."
                      />
                    </ListItem>
                  </List>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "22px",
                      background: Colors.palette.secondary.main,
                      height: "55px",
                      width: "150px",
                    }}
                  >
                    <NavLink
                      to="/services"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </NavLink>
                  </Button>
                </Box>
              </CardContent>
            </BookingCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <BookingCard shadowColor={Colors.palette.secondary.yellow}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  <b>
                    {" "}
                    Dry Clean
                    <br />₹ 799
                  </b>
                </Typography>
                <Typography>
                  <List>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary=" Vacuuming, wiping, and sanitizing interior, including
                      seats, dashboard, and windows."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary=" Specialized cleaning of seats, carpets, and fabric
                      surfaces to remove stains and odors."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary=" Application of protective coatings or sealants to maintain
                      the car's paint finish."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary=" Fine detailing work, polishing, waxing, and tire cleaning."
                      />
                    </ListItem>
                  </List>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "22px",
                      background: Colors.palette.secondary.main,
                      height: "55px",
                      width: "150px",
                    }}
                  >
                    <NavLink
                      to="/services"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </NavLink>
                  </Button>
                </Box>
              </CardContent>
            </BookingCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <BookingCard shadowColor={Colors.palette.secondary.darkPurple}>
              <CardContent sx={{ outline: "bold" }}>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  <b>
                    {" "}
                    Deep Clean
                    <br />₹ 999
                  </b>
                </Typography>
                <Typography>
                  <List>
                    <ListItem>
                      <DoneAllOutlinedIcon />
                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Thorough cleaning of seats, carpets, and upholstery"
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Cleaning, waxing, and polishing the car's exterior."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Removing dirt and grime from the engine compartment."
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="Detailed cleaning and tire dressing"
                      />
                    </ListItem>
                    <ListItem>
                      <DoneAllOutlinedIcon />

                      <ListItemText
                        style={{ marginLeft: "15px", color: "Black" }}
                        primary="  Ensuring windows and mirrors are streak-free for
                      visibility and safety."
                      />
                    </ListItem>
                  </List>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "22px",
                      background: Colors.palette.secondary.main,
                      height: "55px",
                      width: "150px",
                    }}
                  >
                    <NavLink
                      to="/services"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </NavLink>
                  </Button>
                </Box>
              </CardContent>
            </BookingCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Card1;
