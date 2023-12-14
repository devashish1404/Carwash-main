import React, { useState, useRef } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  TextField,
} from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../../../utils/colors";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Axios from "../../../utils/Axios1";

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const otpFromAPI = location.state?.otp;
  const { formData, formType, userData } = location.state;

  const [number, setNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const [email, setEmail] = useState("");

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    opacity: ".8",
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    position: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    backgroundColor: Colors.palette.secondary.main,
  };

  const resendOtp = async () => {
    try {
      const response = await Axios.post("/otp-forgot-password", {
        userName: formData.userName,
      });
      console.log("Resend OTP response:", response.data);
      alert("OTP Resent Successfully");
    } catch (error) {
      console.error("Resend OTP failed:", error);
    }
  };
  const textInputRefs = useRef(Array.from({ length: 6 }).map(() => React.createRef()));
  const onChange = (e, index) => {
    const inputValue = e.target.value;

    if (inputValue.length === 1 && /^[0-9]$/.test(inputValue)) {
      setNumber({
        ...number,
        [index]: parseInt(inputValue),
      });
      setValidationErrors({
        ...validationErrors,
        [index]: "",
      });
      if (index < 5 && textInputRefs.current[index + 1]?.current) {
        textInputRefs.current[index + 1].current.focus();
      }
    } else {
      setNumber({
        ...number,
        [index]: "",
      });
      setValidationErrors({
        ...validationErrors,
        [index]: "Field is required and must be a single digit (0-9).",
      });
    }
  };

  const enteredOtp = Object.values(number).join("").trim();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formType === "registerpage") {
      if (enteredOtp === otpFromAPI) {
        alert("OTP Matched");
        console.log("otp from api: ", otpFromAPI);
        console.log("entered otp: ", enteredOtp);
        try {
          const userData = {
            userName: formData.userName,
            passWord: formData.passWord,
            role: 1,
            firstName: formData.firstName,
            surName: formData.surName,
            mobileNumber: formData.mobileNumber,
            alternateNumber: formData.alternateNumber,
            address: formData.address,
            otp: otpFromAPI,
          };

          const response = await Axios.post("/user-register", userData);
          console.log("User registration response:", response.data);
          alert("User Registered Successfully");
          navigate("/home");
          window.location.reload(); 
        } catch (error) {
          console.error("User registration failed:", error);
        }
      } else {
        alert("OTP does not match. Please enter the correct OTP.");
        console.log("otp from api: ", otpFromAPI);
        console.log("entered otp: ", enteredOtp);
      }
    } else if (formType === "forgetPassword") {
      if (enteredOtp === otpFromAPI) {
        alert("OTP Matched");
        const userData = {
          userName: formData.userName,
          otp: otpFromAPI,
        };
        console.log("otp from api: ", otpFromAPI);
        console.log("entered otp: ", enteredOtp);

        navigate("/passwordreset", {
          state: {
            formData: userData,
          },
        });

        console.log("Forget Password Data: ", userData);
      } else {
        alert("Wrong OTP, Enter Again");
        console.log("otp from api: ", otpFromAPI);
        console.log("entered otp: ", enteredOtp);
        window.location.reload();
      }
    }
  };

  const isSubmitDisabled = Object.values(validationErrors).some(
    (error) => !!error
  );

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
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
          <Container maxWidth="sm">
            <Grid
              container
              style={{
                // backgroundImage: `url(${Sedan})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            >
              <Paper elevation={3} sx={{ ...paperStyle, width: "100%" }}>
                <Box style={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: Colors.palette.secondary.main,
                      justifyContent: "flex-start",
                    }}
                  >
                    <NavLink
                      to="/"
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

                <form style={formStyle} noValidate onSubmit={handleFormSubmit}>
                  <Typography
                    variant="body1"
                    sx={{ color: Colors.palette.secondary.main }}
                  >
                    You have received an OTP on your <b>{formData.userName}</b>
                  </Typography>
                  <br />
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TextField
                        key={index}
                        name="number"
                        type="text"
                        placeholder="-"
                        variant="outlined"
                        value={number[index] ?? ""}
                        onChange={(e) => onChange(e, index)}
                        sx={{
                          display: "solid",
                          width: {
                            md: "40px",
                            sm: "35px",
                          },
                          mt: 1,
                          ml: index === 3 ? 3 : 1,
                        }}
                        InputProps={{
                          sx: {
                            height: "40px",
                            color: Colors.palette.secondary.main,
                            border: `1px solid ${Colors.palette.secondary.main}`,
                          },
                        }}
                      />
                    ))}
                  </Box> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TextField
                        key={index}
                        name="number"
                        type="text"
                        placeholder="-"
                        variant="outlined"
                        value={number[index] ?? ""}
                        onChange={(e) => onChange(e, index)}
                        sx={{
                          display: "solid",
                          width: {
                            md: "40px",
                            sm: "35px",
                          },
                          mt: 1,
                          ml: index === 3 ? 3 : 1,
                        }}
                        InputProps={{
                          sx: {
                            height: "40px",
                            color: Colors.palette.secondary.main,
                            border: `1px solid ${Colors.palette.secondary.main}`,
                          },
                        }}
                        inputRef={textInputRefs.current[index]}
                      />
                    ))}
                  </Box>
                  {Object.values(validationErrors).map((error, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: Colors.palette.error.main,
                        mt: "0.5rem",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </Typography>
                  ))}

                  <Box align="center">
                    <Typography
                      sx={{
                        color: Colors.palette.secondary.main,
                        display: "flex",
                        mt: "1rem",
                      }}
                    >
                      Didn’t receive the OTP?
                      <span
                        style={{
                          color: Colors.palette.secondary.blue,
                          marginRight: "1.5rem",
                          cursor: "pointer",
                        }}
                        onClick={resendOtp}
                      >
                        &nbsp;&nbsp;Resend
                      </span>
                      <TimerOutlinedIcon /> 00:45
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ ...submitButtonStyle }}
                      disabled={isSubmitDisabled}
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
};

export default Otp;
