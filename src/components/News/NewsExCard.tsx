import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import React from "react";

const NewsExCard = () => {
  return (
    <Card sx={{ display: "flex", boxShadow: "none", gap: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: "50%" }}
        image="https://nuochoamc.com/upload/images/bai-viet/1365/review-nuoc-hoa-burlington-1819-tu-roja-parfums4.webp"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5">
            Review Nước Hoa Burlington 1819 Từ Roja Parfums
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary", marginTop: "1rem" }}
          >
            . Mục lục:. . Burlington 1819 là một chai nước hoa đặc biệt, hiếm có
            đến từ thương hiệu xa xỉ Roja Parfums, với những nốt hương ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Xem thêm</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default NewsExCard;
