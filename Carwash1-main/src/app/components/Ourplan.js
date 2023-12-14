import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Colors from "../utils/colors";

const Ourplan = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Grid ml={3}>
          <Typography
            variant="h4"
            mt={10}
            mb={2}
            sx={{ color: Colors.palette.secondary.main }}
          >
            <b> Contact Us</b>
          </Typography>
          <Typography sx={{ lineHeight: "1.8" }}>
            For professional-grade cleaning or any inquiries, feel free to
            contact us. We're dedicated to your satisfaction and welcome your
            feedback. Whether it's about our <br /> services or for any queries,
            our team is here to assist you. Reach out today for top-notch car
            care.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Ourplan;

// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import Colors from "../utils/colors";

// const Ourplan = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "100%",
//           marginTop: "3%",
//           marginBottom: "3%",
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid item >
//             <Typography
//               variant="h4"
//               mt={10}
//               mb={2}
//               sx={{
//                 color: Colors.palette.secondary.main,
//               }}
//             >
//               <b>Contact Us</b>
//             </Typography>
//           {/* </Grid>
//           <Grid item xs={12} md={6}> */}
//             <Typography sx={{ lineHeight: "1.8" }}>
//               For professional-grade cleaning or any inquiries, feel free to
//               contact us. We're dedicated to your satisfaction and welcome your
//               feedback. Whether it's about our services or for any queries, our
//               team is here to assist you. Reach out today for top-notch car care.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Ourplan;


