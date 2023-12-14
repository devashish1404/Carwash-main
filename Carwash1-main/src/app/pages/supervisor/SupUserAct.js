import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Axios from "../../utils/Axios1";
import Loader from "../../components/Loader";

const SupUserAct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const tableHeaders = ["User Name", "Location", "Mobile No.", "View Details"];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/get-all-active-users");
      const activeUsers = response.data.activeUsers;
      console.log(response);

      setTableData(
        activeUsers.map((item, index) => ({
          d1: item.userName,
          d2: `${item.address.state}, ${item.address.city}`,
          d3: item.mobileNumber,
          d4: (
            <Button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                color: Colors.palette.secondary.main,
                fontSize: "12px",
              }}
              onClick={() => handleViewDetails(item)}
            >
              View Details
            </Button>
          ),
        }))
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };
  const handleViewDetails = (user) => {
    console.log("user", user);
    navigate("/supervisoruserdetails", {
      state: { userId: user._id, userStatus: "active" },
    });
    console.log("id: ", user._id);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <SupDash />
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "22%", sm: "12%", md: "8%", lg: "10%" },
            marginLeft: { xs: "5%", sm: "1%", md: "30%", lg: "15%" },
            color: Colors.palette.secondary.main,
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "inherit" },
            fontWeight: "600",
          }}
        >
          Active Users
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "5%", sm: "2%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          {loading ? (
            <h1>
              <Loader />
            </h1>
          ) : (
            <Table data={tableData} headers={tableHeaders} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default SupUserAct;
