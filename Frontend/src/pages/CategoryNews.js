import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import NewsCard from "../componets/newsCard/NewsCard";
import { getNewsCat } from "../services/news";
import { Box, Container } from "@mui/system";
import styles from "../componets/homeNews/homeNews.module.css";
import MainLayout from "../Layout/MainLayout";
import Grid from "@mui/material";

function CategoryNews() {
  const [categoryNewses, setCategoryNewses] = React.useState([]);
  useEffect(() => {
    return () => {
      const url = window.location.href;
      const splitedUrl = url.split("/");
      const category = splitedUrl[splitedUrl.length - 1];
      getCategoryNews(category);
    };
  }, []);

  const getCategoryNews = async (category) => {
    const response = await getNewsCat(category);
    setCategoryNewses(response.data);
    console.log(response, "res.data");
  };

  return (
    <>
      <MainLayout />
      <div className={styles.gridContainer}>
        <Container sx={{ display: "flex" }} style={{ paddingLeft: "100px" }}>
          <Box
            sx={{ flexGrow: 1, justifyContent: "center" }}
            container
            spacing={2}
          >
            <Box item xs={12}>
              <Box container justifyContent="space-around" flex-wrap="nowrap">
                {categoryNewses.map((news, i) => {
                  return (
                    <div className={styles.gridItem} key={news.newsId}>
                      <NewsCard news={news} />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Container>
      </div>

      {/* <Container>
     <Grid>

     </Grid>
        {categoryNewses.map((news, i) => {
          return (
            <div className={styles.gridItem} key={news.newsId}>
              <NewsCard news={news} />
            </div>
          );
        })}
      </Container> */}
    </>
  );
}
export default CategoryNews;
