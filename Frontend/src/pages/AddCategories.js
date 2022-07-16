import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { addCategory } from "../services/categories";
import MainLayout from "../Layout/MainLayout";

export default function AddCategories() {
  const [category, setCategory] = React.useState("");

  const addToCategories = () => {
    console.log(category);
    addCategory(category);
  };

  return (
    <div>
      <MainLayout />
      <Typography variant="h5" style={{ padding: "40px 0 20px 30px" }}>
        AddCategories
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter Category"
        size="small"
        className="register__textBox"
        style={{ marginTop: "20px", width: "50%", marginLeft: "20px" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category..."
      />

      <Button
        variant="contained"
        style={{ marginTop: "20px", width: "50%", marginLeft: "20px" }}
        className="register__btn"
        onClick={addToCategories}
      >
        SUBMIT
      </Button>
    </div>
  );
}
