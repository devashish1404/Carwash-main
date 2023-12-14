import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Button, Box, Grid } from "@mui/material";
import Colors from "../utils/colors";
import Axios from "../utils/Axios";

const Searcher = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

  const handleServiceTypeChange = (event, newValue) => {
    setInputValue1(newValue);
  };

  const handleCarTypeChange = (event, newValue) => {
    setInputValue2(newValue);
  };

  const fetchData = async () => {
    try {
      const responseService = await Axios.get("/get-all-service");
      if (Array.isArray(responseService.data.srv)) {
        setServiceTypes(responseService.data.srv);
      } else {
        console.error("Error:", responseService.data);
      }

      const responseCarType = await Axios.get("/get-cartype");
      if (Array.isArray(responseCarType.data.c)) {
        setCarTypes(responseCarType.data.c);
      } else {
        console.error("Error:", responseCarType.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ background: Colors.palette.secondary.main }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Autocomplete
            value={inputValue1}
            onChange={handleServiceTypeChange}
            options={serviceTypes.map((type) => ({
              key: type._id,
              value: type._id,
              label: type.serviceName,
            }))}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Service Type"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "2%",
                }}
              />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Autocomplete
            value={inputValue2}
            onChange={handleCarTypeChange}
            options={carTypes.map((type) => ({
              key: type._id,
              value: type._id,
              label: type.carName,
            }))}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Car Type"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "2%",
                }}
              />
            )}
          />
        </Grid>
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", marginLeft: "5px" }}
        >
          <Button
            variant="Text"
            sx={{
              width: "100px",
              borderRadius: "10px",
              marginBottom: "10%",
              backgroundColor: Colors.palette.primary.main,
              color: Colors.palette.secondary.black,
              "&:hover": {
                backgroundColor: Colors.palette.primary.lightBlue,
                color: Colors.palette.primary.main,
              },
            }}
          >
            Go
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searcher;
