import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";

import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { getNewses, postTest } from "../services/news";
import { Button } from "@mui/material";
import HomeNews from "../componets/homeNews/HomeNews";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  console.log(getNewses())

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      // if(data.role === 'user'){

      // }
      navigate("/home");
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.uid);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    // getTest();
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <MainLayout name={name} />
      {/* <Button onClick={()=>addNews(newsData)}>Test Post</Button> */}
      <HomeNews/>
    </>
  );
}

export default Home;
