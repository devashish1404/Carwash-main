import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Colors from "../../utils/colors";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Axios from "../../utils/Axios1";
import Loader from "../../components/Loader";

const SupPayUnsucc = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const tableHeaders = [
    "Date",
    "Booking ID",
    "Service Type",
    "Amount",
    "View Details",
  ];

  const fetchPaymentUnsucc = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/get-all-unsuccessfull-payments");
      setTableData(
        response.data.transactionDetails.map((transactionDetails) => ({
          d1: transactionDetails.transaction.createdAt,
          d2: transactionDetails.transaction._id,
          d3: transactionDetails.serviceRequestDetails.serviceType,
          d4: transactionDetails.serviceRequestDetails.Amount,
          d5: (
            <Button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                color: Colors.palette.secondary.main,
                fontSize: "12px",
              }}
              onClick={() =>
                navigate(
                  `/supervisorpaymentdetails?id=${transactionDetails.transaction._id}`
                )
              }
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
  useEffect(() => {
    fetchPaymentUnsucc();
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
          Unsuccessful Payment
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

export default SupPayUnsucc;
