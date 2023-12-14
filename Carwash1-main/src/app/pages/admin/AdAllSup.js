import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "../../utils/Axios";
import Loader from "../../components/Loader";

const AdEditSup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const tableHeaders = [
    "Joining",
    "Supervisor ID",
    "Service Type",
    "Amount",
    "",
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/get-all-supervisior?pages=5");
      setTableData(
        response.data.supervisior.map((service, index) => ({
          d1: service.createdAt,
          d2: service._id,
          d3: service.service,
          d4: service.price,
          d5: (
            <div>
              <Button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: Colors.palette.secondary.blue,
                }}
                onClick={() =>
                  navigate(`/admineditsupervisor?id=${service._id}`)
                }
              >
                <EditIcon
                  sx={{
                    color: Colors.palette.secondary.main,
                  }}
                />
              </Button>

              <Button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: Colors.palette.secondary.blue,
                }}
                onClick={() => handleDelete(service._id)}
              >
                <DeleteIcon sx={{ color: Colors.palette.secondary.main }} />
              </Button>
            </div>
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
  const handleDelete = async (supervisorId) => {
    try {
      await Axios.delete(`/delete-request/${supervisorId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting supervisor: ", error);
    }
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
        <AdminDash />
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
          All Supervisors
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

export default AdEditSup;
