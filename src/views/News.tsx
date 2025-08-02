import { Grid, Typography } from "@mui/material";
import React from "react";
import Link from "../components/Link";
import Breadcrumb from "../components/Breadcrumb";
import TagHeader from "../components/TagHeader";
import "../styles/News.scss";
import NewsExCard from "../components/News/NewsExCard";
import NewsCard from "../components/News/NewsCard";

const News = () => {
  return (
    <div className="news container">
      <TagHeader
        title={"Tin tức | Maison de Perfume"}
        url={"https://maisonperfume.net/tin-tuc"}
      />
      <Breadcrumb>
        <Typography color="text.primary">Tin tức</Typography>
      </Breadcrumb>
      <div className="news__section">
        <NewsExCard />
        <div className="news__section">
          <Grid container spacing={3}>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
            <Grid item md={4} xs={6}>
              <NewsCard />
            </Grid>
          </Grid>
        </div>
        <NewsExCard />
      </div>
    </div>
  );
};

export default News;
