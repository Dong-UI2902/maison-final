import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const NewsCard = () => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardMedia
        sx={{ width: "100%", height: 250 }}
        image="https://nuochoamc.com/upload/images/bai-viet/1364/10-dieu-ve-roja-dove-nguoi-dung-dau-thuong-hieu-xa-xi.webp"
        title="green iguana"
      />
      <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography gutterBottom variant="h6" component="div">
          10 Điều Về Roja Dove - Người Đứng Đầu Thương Hiệu Xa Xỉ
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
