import { React, useState } from "react";
import { Card, Grid } from "@mui/material";
import Colors from "../../utils/colors";

function BookingCard({ children, shadowColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardstyle1 = {
    width: "380px",
    height: "100%",
    borderRadius: "20px",
    backgroundColor: Colors.palette.primary.main,
    gap: "20px",
    border: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: shadowColor,
    boxShadow: isHovered ? "0px 5px 15px" : "none",
    transition: "box-shadow 0.5s, color 0.5s",
  };

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          mt: "5%",
          mb: "5%",
        }}
      >
        <Card
          style={cardstyle1}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {children}
        </Card>
      </Grid>
    </>
  );
}

export default BookingCard;
