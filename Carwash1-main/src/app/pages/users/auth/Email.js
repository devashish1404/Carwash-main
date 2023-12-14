import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Colors from "../../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Axios from "../../../utils/Axios1";

function Email() {
  const [otpFromAPI, setOtpFromAPI] = useState(null);
  const navigate = useNavigate();

  const EmailOTP = async () => {
    const data = {
      userName: formik.values.userName,
    };

    try {
      const response = await Axios.post("/otp-forgot-password", data);
      const otp = response.data.otp;
      setOtpFromAPI(otp);

      console.log("OTP sent:", response.data);
      alert("OTP Sent To Email");
      navigate("/otp", {
        state: { formData: data, otp, formType: "forgetPassword" },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    textAlign: "center",
  };

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    backgroundColor: Colors.palette.secondary.main,
  };

  const validationSchema = yup.object({
    userName: yup
      .string()
      .email("Invalid Email")
      .required("Username/Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("On Submit: ", values);
    },
  });

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm">
            <Grid container>
              <Paper
                elevation={3}
                style={paperStyle}
                sx={{
                  width: "100%",
                  background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                }}
              >
                <Box style={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
                  >
                    <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.secondary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                    </NavLink>
                  </Button>
                </Box>
                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                      mb: 5,
                    }}
                  >
                    Enter Email Address
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Username/Email"
                    id="userName"
                    name="userName"
                    fullWidth
                    size="small"
                    type="email"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.userName && Boolean(formik.errors.userName)
                    }
                    helperText={
                      formik.touched.userName && formik.errors.userName
                    }
                    sx={{ marginBottom: "20px" }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ ...submitButtonStyle }}
                      onClick={() => EmailOTP()}
                    >
                      Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </Button>
                  </Box>
                </form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  <h5>Already have an account?&nbsp;&nbsp;</h5>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h5>Login</h5>
                  </NavLink>
                </Box>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Email;
