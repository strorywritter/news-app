import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, db, logout } from "./firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import PageRoutes from "./Routes/Routes";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div style={{width:'100vw'}}>
     {/* <MainLayout /> */}
      <PageRoutes />
  
    </div>
  );
}

export default App;
