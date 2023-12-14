import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../utils/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

import Axios from "../utils/Axios";
import { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function EditSupervisorCredentials() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async () => {
    const data = {
      firstName: formik.values.firstName,
      surName: formik.values.surName,
      mobileNumber: formik.values.mobileNumber,
      alternateNumber: formik.values.alternateNumber,
      userName: formik.values.email,
      address: {
        locality: formik.values.locality,
        city: formik.values.city,
        district: formik.values.district,
        state: formik.values.state,
        pincode: formik.values.pincode,
      },

      Service: formik.values.Service,
      price: formik.values.price,
      passWord: formik.values.password,
    };

    try {
      const response = await Axios.post("/create-supervisior", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validationSchema = Yup.object({
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
    locality: Yup.string().required("Address is required"),
    city: Yup.string()
      .required("City/Town is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    district: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State "),
    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^[1-9]\d{5}$/, "Invalid Pincode"),
    Service: Yup.string().required("Service Type is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive")
      .integer("Price must be an integer"),
    createusername: Yup.string()
      .required("Create Username is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in userName"),
    password: Yup.string().required("Password is required"),
    confirmpass: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      mobileNumber: "",
      alternateNumber: "",

      email: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",

      price: "",
      createusername: "",
      password: "",
      confirmpass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
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

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
  };
  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };

  return (
    <Box
      sx={{
        height: "auto",
        borderRadius: "25",
      }}
    >
      <Container maxWidth="md">
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Typography
              variant="h6"
              sx={{ color: Colors.palette.secondary.main }}
            >
              Enter credentials here:
            </Typography>
            <form style={formStyle} onSubmit={formik.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="surName"
                    label="Last Name"
                    name="surName"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.surName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.surName && Boolean(formik.errors.surName)
                    }
                    helperText={formik.touched.surName && formik.errors.surName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="mobileNumber"
                    label="Contact Number"
                    name="mobileNumber"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobileNumber &&
                      Boolean(formik.errors.mobileNumber)
                    }
                    helperText={
                      formik.touched.mobileNumber && formik.errors.mobileNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    label="Alternate Number"
                    name="alternateNumber"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.alternateNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.alternateNumber &&
                      Boolean(formik.errors.alternateNumber)
                    }
                    helperText={
                      formik.touched.alternateNumber &&
                      formik.errors.alternateNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Address
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="locality"
                    label="Locality / Building / Street / Society"
                    name="locality"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.locality}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.locality && Boolean(formik.errors.locality)
                    }
                    helperText={
                      formik.touched.locality && formik.errors.locality
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City / Town  District"
                    name="city"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="district"
                    label="District"
                    name="district"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.district}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.district && Boolean(formik.errors.district)
                    }
                    helperText={
                      formik.touched.district && formik.errors.district
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.pincode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.pincode && Boolean(formik.errors.pincode)
                    }
                    helperText={formik.touched.pincode && formik.errors.pincode}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Services
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small" sx={textFieldStyles}>
                    <InputLabel id="demo-simple-select-label">
                      Select Service Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="Service"
                      name="Service"
                      value={formik.values.Service}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Select Service Type"
                      error={
                        formik.touched.Service && Boolean(formik.errors.Service)
                      }
                    >
                      <MenuItem value={10}>Routine Clean</MenuItem>
                      <MenuItem value={20}>Dry Clean</MenuItem>
                      <MenuItem value={30}>Deep Clean</MenuItem>
                    </Select>
                    {formik.touched.Service && formik.errors.Service && (
                      <Typography variant="caption" color="error">
                        {formik.errors.Service}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="price"
                    label="Price (in Rupee)"
                    name="price"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    Generate Id
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="createusername"
                    label="Create Username"
                    name="createusername"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.createusername}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.createusername &&
                      Boolean(formik.errors.createusername)
                    }
                    helperText={
                      formik.touched.createusername &&
                      formik.errors.createusername
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  {/* <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  /> */}
                  <TextField
                    variant="outlined"
                    label="Password"
                    id="password"
                    name="password"
                    fullWidth
                    size="small"
                    sx={textFieldStyles}
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="confirmpass"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    name="confirmpass"
                    size="small"
                    sx={textFieldStyles}
                    value={formik.values.confirmpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmpass &&
                      Boolean(formik.errors.confirmpass)
                    }
                    helperText={
                      formik.touched.confirmpass && formik.errors.confirmpass
                    }
                  />
                </Grid>
              </Grid>

              <Box align="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                  onClick={createUser}
                >
                  Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default EditSupervisorCredentials;
