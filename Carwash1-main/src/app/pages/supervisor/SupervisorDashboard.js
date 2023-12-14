import React from "react";
import SupDash from "../../components/SupDash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
import Colors from "../../utils/colors";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "2px 2px 2px grey",
};

const headingStyles = {
  color: Colors.palette.secondary.main,
  fontWeight: "600",
};

const subHeading = {
  color: Colors.palette.secondary.main,
};

const iconBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
const iconsStyles = {
  padding: "2px",
  color: Colors.palette.primary.main,
  backgroundColor: Colors.palette.secondary.main,
  borderRadius: "50%",
  border: `2px solid ${Colors.palette.secondary.main}`,
};

const SupervisorsDashboard = () => {
  return (
    <>
      <Box
        display="block"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
        // className="wrapper"
        sx={{
          maxWidth: "100%",
          borderRadius: "20px",
          background: Colors.palette.secondary.cardBackground,
          padding: "20px",
          marginLeft: { xs: "1%", sm: "5%", md: "30%", lg: "20%" },
          marginTop: { xs: "23%", sm: "13%", md: "10%", lg: "8%" },
          marginRight: { xs: "1%", sm: "3%" },
        }}
      >
        <SupDash />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ maxWidth: { xs: 700, md: 510 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <AccountBalanceRoundedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      24{" "}
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Successfull
                      <br /> Payments
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ maxWidth: { xs: 700, md: 510 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <AccountBalanceRoundedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      9
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Unsuccessful <br /> Payments
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            // marginLeft: { xs: "2%", sm: "3%" },
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 340 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      7
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      User <br /> Requests
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 340 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      33
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Active <br /> Users
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 340 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      5
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Declined <br /> Users
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SupervisorsDashboard;
