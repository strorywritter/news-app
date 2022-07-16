import { Container } from "@mui/system";
import NewsCard from "../newsCard/NewsCard";
import { getNewses } from "../../services/news";
import { useEffect, useState } from "react";
import { Grid, Card } from "@mui/material";
import styles from "./homeNews.module.css";
import MainLayout from "../../Layout/MainLayout";

function HomeNews() {
  const [allNews, setAllaNews] = useState([]);

  const newsResponse = async () => {
    const newsRes = await getNewses();
    console.log(newsRes.data);
    setAllaNews(newsRes.data);
  };

  useEffect(() => {
    newsResponse();
  }, []);

  return (
    <>
      <div className={styles.gridContainer}>
        <Container sx={{ display: "flex", }} style={{paddingLeft:'100px' }}>
          <Grid sx={{ flexGrow: 1, justifyContent:'center', }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="space-around" flex-wrap="nowrap">
                {allNews.map((news, i) => {
                  return (
                    <div className={styles.gridItem} key={news.newsId}>
                      <NewsCard news={news} />
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomeNews;
