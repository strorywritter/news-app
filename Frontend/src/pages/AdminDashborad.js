import { Typography, Card, Toolbar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CategoryIcon from "@mui/icons-material/Category";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { db } from "../firebase/firebase";

export default function AdminDashborad() {
  const navigate = useNavigate();

  return (
    <div>
      <MainLayout />
      <div>
        <Typography variant="h5" style={{ padding: "40px 0 20px 30px" }}>
          Admin Dashborad
        </Typography>
      </div>
      <Toolbar>
        <Button
          onClick={() => navigate("/addcategories")}
          endIcon={<CategoryIcon />}
          style={{ marginRight: 20 }}
        >
          Add Categories
        </Button>{" "}
        <Button
          onClick={() => navigate("/changeuserrole")}
          endIcon={<SupervisorAccountIcon />}
          style={{ marginRight: 20 }}
        >
          Change User Role
        </Button>
      </Toolbar>
    </div>
  );
}
