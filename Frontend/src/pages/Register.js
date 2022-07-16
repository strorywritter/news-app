import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase/firebase";
import { Container } from "@mui/system";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <div
      className="register"
      style={{
        textAlign: "center",
        backgroundColor: "#c5bcbe",
        height: "750px",
      }}
    >
      <Container>
        <div style={{ padding: " 60px 0 0 0" }}>
          <form>
            <div
              className="register__container"
              style={{
                textAligan: "center",
                margin: "10px 0",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" textAlign="center" fontWeight="bold">
                Sign Up
              </Typography>
              <div style={{ textAligan: "center", margin: "20px 0" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter UserName"
                  size="small"
                  className="register__textBox"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div style={{ textAligan: "center", margin: "20px 0" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Email"
                  size="small"
                  className="register__textBox"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
              </div>
              <div style={{ textAligan: "center", margin: "20px 0" }}>
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Enter Password"
                  size="small"
                  className="register__textBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <Button
                variant="contained"
                className="register__btn"
                onClick={register}
              >
                Register
              </Button>
            </div>
            <div>
              {" "}
              Already have an account? <Link to="/" style={{color:'blue'}}>Login</Link> now.
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Register;
