import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../../utils/colors";
import { NavLink } from "react-router-dom";
import Axios from "../../../utils/Axios1";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [otpFromAPI, setOtpFromAPI] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const RegiterUser = async () => {
    const data = {
      firstName: formik.values.firstName,
      surName: formik.values.surName,
      mobileNumber: formik.values.mobileNumber,
      alternateNumber: formik.values.alternateNumber,
      userName: formik.values.email,
      passWord: formik.values.password,
      address: {
        locality: formik.values.locality,
        city: formik.values.city,
        district: formik.values.district,
        state: formik.values.state,
        pincode: formik.values.pincode,
      },
    };

    try {
      const response = await Axios.post("/sendOTP", data);
      const otp = response.data.otp;
      setOtpFromAPI(otp);
      console.log(response.data);

      navigate("/otp", {
        state: {
          formData: data,
          otp,
          formType: "registerpage",
        },
      });
    } catch (error) {
      if (error.response) {
        console.log("Server Error Data:", error.response.data);
        console.log("Server Error Status:", error.response.status);
      }
    }
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    height: "auto",
  };

  const submitButtonStyle = {
    marginTop: "10px",
    marginBottom: "5px",
    padding: "10px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    backgroundColor: Colors.palette.secondary.main,
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "& input": {
        color: "black",
      },
      "& input::placeholder": {
        color: "darkblack",
      },
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    surName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in Last Name"),
    mobileNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    alternateNumber: Yup.string()
      .required("Alternate Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password should have one capital letter, one number, and one special character"
    )
    .min(6, "Password must be at least 6 characters in length"),
    locality: Yup.string().required("Locality is required"),
    city: Yup.string()
      .required("City is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    district: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State"),
    pincode: Yup.string()
      .required("Pincode is required")
      .test(
        "valid-pincode",
        "Invalid Pincode",
        (value) => value && /^[1-9][0-9]{5}$/.test(value)
      ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      mobileNumber: "",
      alternateNumber: "",
      email: "",
      password: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("On Submit Values: ", values);
    },
  });

  return (
    <>
      {/* <Otp otpFromAPI={otpFromAPI} /> */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          display: "flex",
          minHeight: "100vh", 
          justifyContent: "center",
          alignItems: "center",
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
          <Container maxWidth="sm" sx={{ mt: "1%", mb: "2%" }}>
            <Grid container>
              <Paper elevation={10} style={paperStyle}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <Button>
                    <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: Colors.palette.secondary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowBackIosIcon />
                      Login
                    </NavLink>
                  </Button>
                </Box>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    mt: "5px",
                    mb: "10px",
                    justifyContent: "center",
                    color: Colors.palette.secondary.main,
                  }}
                >
                  Enter your credentials here:
                </Typography>
                <form
                  style={{ color: Colors.palette.secondary.main }}
                  onSubmit={formik.handleSubmit}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="surName"
                        label="Last Name"
                        name="surName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.surName}
                        error={
                          formik.touched.surName &&
                          Boolean(formik.errors.surName)
                        }
                        helperText={
                          formik.touched.surName && formik.errors.surName
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="mobileNumber"
                        label="Contact Number"
                        // type="Mobile"
                        name="mobileNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobileNumber}
                        error={
                          formik.touched.mobileNumber &&
                          Boolean(formik.errors.mobileNumber)
                        }
                        helperText={
                          formik.touched.mobileNumber &&
                          formik.errors.mobileNumber
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        size="small"
                        id="alternateNumber"
                        label="Alternate Number"
                        name="alternateNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.alternateNumber}
                        error={
                          formik.touched.alternateNumber &&
                          Boolean(formik.errors.alternateNumber)
                        }
                        helperText={
                          formik.touched.alternateNumber &&
                          formik.errors.alternateNumber
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="password"
                        label="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && (formik.errors.password)
                        }
                        sx={textFieldStyles}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{ color: Colors.palette.secondary.main }}
                      >
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        id="locality"
                        label="Locality / Building / Street / Society"
                        name="locality"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.locality}
                        error={
                          formik.touched.locality &&
                          Boolean(formik.errors.locality)
                        }
                        helperText={
                          formik.touched.locality && formik.errors.locality
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="city"
                        label="City / Town  District"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="district"
                        label="District"
                        name="district"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.district &&
                          Boolean(formik.errors.district)
                        }
                        helperText={
                          formik.touched.district && formik.errors.district
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="state"
                        label="State"
                        name="state"
                        onChange={formik.handleChange}
                        s
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pincode}
                        error={
                          formik.touched.pincode &&
                          Boolean(formik.errors.pincode)
                        }
                        helperText={
                          formik.touched.pincode && formik.errors.pincode
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                  </Grid>
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
                      sx={submitButtonStyle}
                      onClick={RegiterUser}
                    >
                      Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default RegisterPage;
