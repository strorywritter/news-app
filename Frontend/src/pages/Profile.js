import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Card, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", data.role);

      setName(data.name);
      setEmail(data.email);
      setRole(data.role);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <MainLayout name={name} />

      <Card style={{ padding: "20px", margin: "60px 80px" }}>
        <AccountCircleIcon style={{ hight: 50 , width:50}}  />
        <Typography > Name : {name}</Typography>
        <Typography> Email : {email}</Typography>
        <Typography>User Role : {role}</Typography>
      </Card>
    </>
  );
}

export default Profile;
