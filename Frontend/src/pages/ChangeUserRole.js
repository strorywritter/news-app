import React from "react";
import MainLayout from "../Layout/MainLayout";
import { Typography } from "@mui/material";
import { db } from "../firebase/firebase";
import { useEffect } from "react";
import {DataTable} from "../componets/table/Table"

export default function ChangeUserRole() {
  const [userList, setuserList] = React.useState([]);
  const fetchUserName = async () => {
    try {
      const allUsers = await db.collection("users").get();
      console.log(allUsers)
      setuserList(allUsers.docs.map((doc) => doc));
      console.log(allUsers.docs.map((doc) => doc.id));
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    return () => {
      fetchUserName();
    };
  }, []);

  return (
    <div>
      <MainLayout />
      <Typography variant="h5" style={{ padding: "40px 0 20px 30px" }}>
        ChangeUserRole
      </Typography>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3"> <DataTable data={userList} /> </Typography>
      </div>
    </div>
  );
}
