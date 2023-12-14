import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Card, Box } from "@mui/material";
import red from "../assests/images/red1.png";
import yellow from "../assests/images/yellow1.png";
import blue from "../assests/images/blue1.png";
import Colors from "../utils/colors";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const imageStyles = {
  width: "70%",
  height: "auto",
  // display: "flex",
  transition: "transform 0.3s ease-in-out",
};

const cardStyles = {
  textAlign: "center",
  boxShadow: "none",
  transition: "transform 0.3s ease-in-out",
};

const OurServices = () => {
  const handleImageHover = (event) => {
    const card = event.currentTarget;
    const serviceText = card.querySelector(".service-text");
    card.style.transform = "scale(1.1)";
    serviceText.style.backgroundColor = Colors.palette.secondary.main;
    serviceText.style.color = "white";
  };

  const handleImageLeave = (event) => {
    const card = event.currentTarget;
    const serviceText = card.querySelector(".service-text");
    card.style.transform = "scale(1)";
    serviceText.style.backgroundColor = "transparent";
    serviceText.style.color = Colors.palette.secondary.main;
  };
  return (
    <Container sx={{ marginTop: "3%" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "3%" }}>
        <Typography
          variant="h4"
          sx={{ color: Colors.palette.secondary.main, fontWeight: "600" }}
        >
          Our Services&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;•
        </Typography>
   <Divider
  sx={{
    backgroundColor: Colors.palette.secondary.main,
    height: "2px",
    flex: 1,
    marginLeft: "2%",
    display: {
      xs: "none", 
      sm: "block", 
    },
  }}
/>


        <Typography
          sx={{
            color: Colors.palette.secondary.main,
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5%",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <NavLink
            to="/services"
            style={{
              textDecoration: "none",
              color: Colors.palette.secondary.main,
            }}
          >
            See all <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
          </NavLink>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ background: Colors.palette.primary.main, ...cardStyles }}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "8%",
              }}
            >
              <div className="service-text">HatchBack</div>
            </Typography>
            <img src={red} alt="Hatchback" style={imageStyles} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{ background: Colors.palette.primary.main, ...cardStyles }}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "5%",
              }}
            >
              <div className="service-text">Sedan</div>
            </Typography>
            <img src={yellow} alt="yellow" style={imageStyles} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{ background: Colors.palette.primary.main, ...cardStyles }}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "8%",
              }}
            >
              <div className="service-text">SUV</div>
            </Typography>
            <img src={blue} alt="SUV" style={imageStyles} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;
