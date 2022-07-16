import { Card, Container, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const newsData = async () =>{
//   await newsResponse();
//   // console.log(newses)
//   // return newses
// }

// console.log(newsData(), "newsData")

function NewsCard(props) {
  const navigate = useNavigate();

  const handelClick = (id) => {
    console.log("News click");
    navigate(`/singleNews/${id}`);
  };

  return (
    <>
      <Card
        style={{
          width: 300,
          padding: "10px 0",
          margin: "20px 0",
          textAlign: "start",
          height: "450px",
        }}
        onClick={() => handelClick(props.news.newsId)}
      >
        <Container>
          <Typography variant={"h6"} fontWeight={500}>
            {props.news.headline}
          </Typography>
          <Typography variant={"p"} style={{ color: "blue", fontSize: 14 }}>
            {props.news.category}
          </Typography>
          <br></br>
          <Divider />
          <br></br>
          <div style={{ hiegth: "900px" }}>
            <Typography
              variant={"p"}
              style={{ margin: "0 0 20px 0", wordWrap: "break-word" }}
            >
              {props.news.news.slice(0, 300) + "..."}
            </Typography>
          </div>
        </Container>
      </Card>
    </>
  );
}

export default NewsCard;
