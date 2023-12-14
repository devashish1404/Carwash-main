// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import image1 from "../assests/images/Quote-Above.png";
// import image2 from "../assests/images/Quote-Below.png";
// import Colors from "../utils/colors";
// const cards = [
//   {
//     content:
//       "Outstanding service! Impeccable cleaning, prompt pickup, and a gleaming car. Highly recommended for car care. <br/><br/> ~ Amet ipsum ",
//   },
//   {
//     content:
//       "Exceptional service, the deep clean was immaculate, and the pick-up/drop-off option made it hassle-free. Highly recommended !! <br/><br/> ~ Lorem ipsum",
//   },
//   {
//     content:
//       "A few days ago, encountered exceptional service. The clean was immaculate, drop-off and pick-up offered utmost convenience. A remarkable experience. <br/><br/> ~ Adipiscing",
//   },
//   {
//     content:
//       "My car's now a gleaming showstopper, thanks to the exceptional service, shining, spotless, and absolutely stunning after cleaning. <br/><br/> ~ Amet ipsum",
//   },
// ];

// const Review = () => {
//   return (
//     <Container>
//       <Box sx={{ mt: 10 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             color: Colors.palette.secondary.main,
//             marginBottom: "50px",
//             fontWeight: "bold",
//           }}
//         >
//           Review
//         </Typography>

//         <Grid container spacing={2}>
//           {cards.map((card, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   border: `2px dashed ${Colors.palette.secondary.main}`,
//                   // border: `2px dotted ${Colors.palette.secondary.main}`,
//                   // border: `2px dot-dot-dash ${Colors.palette.secondary.main}`,

//                   position: "relative",
//                 }}
//               >
//                 <img
//                   src={image1}
//                   alt="TopImage"
//                   style={{
//                     position: "absolute",
//                     top: "0",
//                     left: "0",
//                     width: "30px",
//                     height: "30px",
//                     zIndex: 1,
//                   }}
//                 />

//                 <img
//                   src={image2}
//                   alt="BottomImage"
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     right: "0",
//                     width: "30px",
//                     height: "30px",
//                     zIndex: 1,
//                   }}
//                 />

//                 <CardContent
//                   sx={{
//                     marginTop: "40px",
//                     flex: 1,
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     style={{ color: Colors.palette.secondary.black }}
//                     dangerouslySetInnerHTML={{ __html: card.content }}
//                   />
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Review;

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import image1 from "../assests/images/Quote-Above.png";
import image2 from "../assests/images/Quote-Below.png";
import Colors from "../utils/colors";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const cards = [
  {
    content:
      "Outstanding service! Impeccable cleaning, prompt pickup, and a gleaming car. Highly recommended for car care. <br/><br/><b> ~ Amet ipsum</b> ",
  },
  {
    content:
      "Exceptional service, the deep clean was immaculate, and the pick-up/drop-off option made it hassle-free. Highly recommended !! <br/><br/><b> ~ Lorem ipsum</b>",
  },
  {
    content:
      "A few days ago, encountered exceptional service. The clean was immaculate, drop-off and pick-up offered utmost convenience. A remarkable experience. <br/><br/><b> ~ Adipiscing</b>",
  },
  {
    content:
      "My car's now a gleaming showstopper, thanks to the exceptional service, shining, spotless, and absolutely stunning after cleaning. <br/><br/><b> ~ Amet ipsum</b>",
  },
];

const Review = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  return (
    <Container>
      <Box sx={{ mt: 7 }}>
        <Typography
          variant="h4"
          sx={{
            color: Colors.palette.secondary.main,
            mb: 5,
            fontWeight: "bold",
          }}
        >
          Review
        </Typography>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  height: "90%",
                  padding: "20px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "transform 0.5s",
                  transform: hoveredStep === index ? "scale(1.05)" : "scale(1)",
                  background: Colors.palette.primary.main,
                  // background:
                  //     "linear-gradient(180deg, #FF8E53 50%, #ffffff 50%)",
                  borderRadius: "10px",
                  border: `2px solid ${Colors.palette.secondary.lightGrey}`,
                  boxShadow:
                    hoveredStep === index
                      ? `5px 5px 15px ${Colors.palette.secondary.lightGrey}`
                      : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    // background:
                    // "linear-gradient(30deg, #FFFFFF 40%, #E3E1E1 60%)",
                    background:
                      "linear-gradient(180deg, #eeeded 40%, #a2c9e8 60%)",
                  },
                }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <img
                  src={image1}
                  alt="TopImage"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,
                  }}
                />

                <img
                  src={image2}
                  alt="BottomImage"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,
                  }}
                />

                <CardContent
                  sx={{
                    marginTop: "20px",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      opacity: hoveredStep === index ? 1 : 0.8,
                      color: Colors.palette.secondary.black,
                      fontSize: "16px",
                    }}
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
