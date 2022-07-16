import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, logInWithEmailAndPassword } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Button,
  Typography,
  CardContent,
  TextField,
  Input,
  Card,
} from "@mui/material";
import { useForm } from "react-hook-form";

// import { useNavigate } from "react-router-dom";

function SingInPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <>
      <div style={{ textAlign: "center" , backgroundColor:'#c5bcbe', height:'750px'}}>
        <CardContent>
          <div  style={{ margin: "60px 0px 0 0px" }}>
            <div>
              <Typography variant="h5" textAlign="center" fontWeight="bold">
                Sign In
              </Typography>

              <form>
                <div style={{ margin: "10px 0" }}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="Enter Password"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div style={{ margin: "10px 0" }}>
                  <Button
                    variant="contained"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                  >
                    Sign In
                  </Button>
                </div>
              </form>

              <div>
                or
                <Button onClick={() => navigate("/register")}>Sign Up</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </>
  );
}

export default SingInPage;
