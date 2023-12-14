import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Colors from "../../utils/colors";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Axios from "../../utils/Axios";
import { NavLink } from "react-router-dom";

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
  fontWeight: "600",
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

const AdminDashboard = () => {
  const [SuccData, setSuccData] = useState({});
  const [UnsuccData, setUnsuccData] = useState({});
  const [SupervisorData, setSupervisorData] = useState({});
  const [UserReqData, setUserReqData] = useState({});
  const [ActUserData, setActUserData] = useState({});
  const [DecUserData, setDecUserData] = useState({});

  const fetchData = async () => {
    // setLoading(true);
    try {
      const responseSucc = await Axios.get("/count-sucessfully-pay");
      setSuccData(responseSucc.data);
      console.log("Response Data:", responseSucc.data);

      const responseUnscc = await Axios.get("/count-unsucessfull-pay");
      setUnsuccData(responseUnscc.data);
      console.log("Response Data:", responseUnscc.data);

      const responseSup = await Axios.get("/count-all-supervisior");
      setSupervisorData(responseSup.data);
      console.log("Response Data:", responseSup.data);

      // const responseUserReq = await Axios.get("/");
      // setUserReqData(responseUserReq.data);

      
      // console.log("Response Data:", responseUserReq.data);

      // const responseActUser = await Axios.get("/");
      // setActUserData(responseActUser.data);
      // console.log("Response Data:", responseActUser.data);

      // const responseDecUser = await Axios.get("/");
      // setDecUserData(responseDecUser.data);
      // console.log("Response Data:", responseDecUser.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
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
        <AdminDash />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <NavLink
                to="/adminpaysuccessful"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 510 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <AccountBalanceRoundedIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        {SuccData.count}
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Successful <br /> Payments
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <NavLink
                to="/adminpayunsucessful"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 510 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <AccountBalanceRoundedIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        {UnsuccData.count}
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Unsuccessful <br /> Payments
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            // marginLeft: { xs: "2%", sm: "1%" },
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuserrequest"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 340 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <PeopleAltOutlinedIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Users <br /> Requests
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuseractive"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 340 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <PeopleAltOutlinedIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Active <br /> Users
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuserinactive"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 330 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <PeopleAltOutlinedIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Inactive <br /> Users
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Box>

        {/* <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            // marginLeft: { xs: "2%", sm: "1%" },
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <NavLink
                to="/adminallservice"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <MiscellaneousServicesIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        All Services
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={3}>
              <NavLink
                to="/aminrequestedservice"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <MiscellaneousServicesIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Requested Services
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={3}>
              <NavLink
                to="/adminacceptservice"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <MiscellaneousServicesIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Accepted Services
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={3}>
              <NavLink
                to="/admindeniedservice"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={iconBoxStyles}>
                        <MiscellaneousServicesIcon sx={iconsStyles} />
                      </Box>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        --
                      </Typography>
                      <Typography variant="body1" sx={subHeading}>
                        Denied Services
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Box> */}

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
            <Grid item xs={8} sm={8} md={10}>
              <NavLink
                to="/adminallsupervisor"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: 900,
                    // marginTop: { xs: "7%", sm: "2%" },
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <AccountCircleOutlinedIcon
                        sx={{
                          ...iconsStyles,
                          marginLeft: { xs: "85%", sm: "95%" },
                        }}
                      />
                      <Typography
                        variant="h4"
                        component="div"
                        sx={headingStyles}
                      >
                        {SupervisorData.count}
                        <span style={{ fontSize: "0.5em" }}> Supervisors</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              {/* <Card
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  boxShadow: "2px 2px 2px grey",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <span style={{ fontSize: "16px" }}>Add +</span>
                  </CardContent>
                </CardActionArea>
              </Card> */}
              <Fab
                aria-label="add"
                sx={{
                  width: 90,
                  height: 90,
                  mt: 0.5,
                  textAlign: "center",
                  background: Colors.palette.primary.main,
                  boxShadow: "2px 2px 2px grey",
                }}
              >
                <AddIcon sx={{ fontSize: "30px" }} />
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
