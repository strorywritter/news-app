import { Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  getSingleNews,
  updateDescription,
  updateHeadline,
} from "../services/news";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { TextField, Button } from "@mui/material";
import MainLayout from "../Layout/MainLayout";

export default function SingleNews() {
  const [newsDetails, setNewsDetails] = React.useState(null);
  const [editHeadline, setEditHeadline] = React.useState(false);
  const [editDescription, setEditDescription] = React.useState(false);
  const [headline, setHeadline] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [userRole, setUserRole] = React.useState(null);

  useEffect(() => {
    const url = window.location.href;
    const splitedUrl = url.split("/");
    const newsid = splitedUrl[splitedUrl.length - 1];
    localStorage.setItem("newsId", newsid);
    getNewsDetails(newsid);

    return () => {
      const role = localStorage.getItem("role");
      setUserRole(role);
    };
  }, []);

  const getNewsDetails = async (newsId) => {
    const news = await getSingleNews(newsId);
    // console.log(news)
    setNewsDetails(news.data[0]);
  };

  if (!newsDetails) {
    return <div>Loading...</div>;
  }

  const handelHedline = () => {
    console.log("edit headline");
    setEditHeadline(true);
    setHeadline(newsDetails.headline);
  };

  const handelNews = () => {
    console.log("edit ");
    setEditDescription(true);
    setDescription(newsDetails.news);
  };

  const changeHeadline = async () => {
    const data = {
      headLine: headline,
      newsId: newsDetails.newsId,
    };
    console.log(headline);
    const response = await updateHeadline(data);
    console.log(response);
    if (response && response.status === 200) {
      setNewsDetails({ ...newsDetails, headline: headline });
      setEditHeadline(false);
    }
  };

  const changeDescription = async () => {
    const data = {
      news: description,
      newsId: newsDetails.newsId,
    };
    const response = await updateDescription(data);
    console.log(response);
    if (response && response.status === 200) {
      setNewsDetails({ ...newsDetails, news: description });
      setEditDescription(false);
    }
  };

  return (
    <>
      <MainLayout />
      <div style={{ padding: "100px", background: "#c5bcbe" }}>
        {editHeadline ? (
          <>
            <TextField
              id="outlined-basic"
              label="Edit Headline"
              size="small"
              className="register__textBox"
              style={{ marginTop: "20px", width: "50%", marginLeft: "20px" }}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Headline..."
            />
            <Button
              variant="contained"
              style={{ width: "50%", marginLeft: "20px", color: "red" }}
              className="register__btn"
              onClick={changeHeadline}
            >
              SUBMIT
            </Button>
          </>
        ) : (
          <Toolbar style={{ alignItems: "flex-start" }}>
            <Typography variant={"h3"}>{newsDetails.headline}</Typography>
            {userRole === "editor" || userRole === "admin" ? (
              <div style={{ paddingTop: 18 }}>
                <IconButton
                  onClick={handelHedline}
                  style={{ backgroundColor: "white" }}
                >
                  <EditIcon fontSize={"small"} style={{ color: "Red" }} />
                </IconButton>
              </div>
            ) : null}
          </Toolbar>
        )}

        <Paper
          style={{
            backgroundColor: "white",
            width: "100px",
            marginLeft: 20,
            padding: "5px 0 5px 10px",
          }}
        >
          {newsDetails.category}
        </Paper>

        {editDescription ? (
          <>
            <TextField
              id="outlined-basic"
              label="Edit Description"
              size="small"
              className="register__textBox"
              style={{ marginTop: "20px", width: "50%", marginLeft: "20px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
            <Button
              variant="contained"
              style={{ marginTop: "20px", width: "50%", marginLeft: "20px" }}
              className="register__btn"
              onClick={changeDescription}
            >
              SUBMIT
            </Button>
          </>
        ) : (
          <>
            <div style={{ fontSize: "18px", marginTop: "10px" }}>
              {newsDetails.news}
            </div>
            {userRole === "editor" || userRole === "admin" ? (
              <Toolbar>
                <Typography style={{ color: "red" }}>
                  Edit News
                </Typography>
                <div style={{paddingLeft:15}}>
                <IconButton
                  onClick={handelNews}
                  style={{ backgroundColor: "white",  }}
                >
                  <EditIcon fontSize={"small"} style={{ color: "Red" }} />
                </IconButton>
                </div>
               
              </Toolbar>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}
