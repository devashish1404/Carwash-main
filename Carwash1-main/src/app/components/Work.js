import React, { useState } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import Star from "../assests/images/Ratings.png";
import Book from "../assests/images/booking.png";
import Payment from "../assests/images/Payment.png";
import Colors from "../utils/colors";

const steps = [
  {
    title: "Book Slot",
    description: "Book your car wash online at your convenience.",
    image: Book,
  },
  {
    title: "5 Star Services",
    description:
      "Our experienced team arrives to clean your car thoroughly. We provide the best services.",
    image: Star,
  },
  {
    title: "Payment",
    description:
      "Make a secure payment and rate our service. We provide the best services.",
    image: Payment,
  },
];

function Work() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <Container>
      <Typography
        variant="h4"
        // align="center"
        sx={{
          mt: 10,
          color: Colors.palette.secondary.main,
          marginBottom: "3%",
          fontWeight: "600",
        }}
      >
        How We Work
      </Typography>
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              style={{
                height: "90%",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.5s",
                transform: hoveredStep === index ? "scale(1.05)" : "scale(1)",
                backgroundColor: Colors.palette.primary.main,
                borderRadius: "10px",
                border: `2px solid ${Colors.palette.secondary.lightGrey}`,
                boxShadow:
                  hoveredStep === index
                    ? `5px 5px 15px ${Colors.palette.background.lightGreen}`
                    : "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <img
                src={step.image}
                alt={step.title}
                title={step.title}
                style={{
                  maxWidth: "100%",
                  height: "150px",
                  borderRadius: "10px",
                }}
              />
              <Typography variant="h5" style={{ marginTop: "20px" }}>
                {step.title}
              </Typography>
              <Typography
                style={{
                  opacity: hoveredStep === index ? 1 : 0.7,
                  transition: "opacity 0.3s",
                  margin: "20px 0",
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Work;
