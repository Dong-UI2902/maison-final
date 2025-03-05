import React, { useState } from "react";
import Link from "./Link";
import { Grid, Button } from "@mui/material";
import { isMobile } from "../Helper/Helper";
import { CardProduct } from "./CardProduct";
import { useStore } from "../context";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const FlashSale = () => {
  const { products } = useStore();

  return (
    <section className="sale container">
      <div className="sale__container">
        {/* <div className="sale__title container">
          <div className="sale__title-left">
            <img src="/assets/fsale_countdown_label.webp" />
          </div>
          <div className="sale__title-right">
            <p>Kết thúc sau</p>
            <CountdownTimer targetDate={dateTime} />
          </div>
        </div> */}
        <center>
          <Link href="/category/chuong-trinh-uu-dai">
            <img
              className="sale__img"
              src={`/assets/img/events/${
                isMobile() ? "sale_mobile.png" : "sale.png"
              }`}
            />
          </Link>
        </center>

        <div className="product product__container">
          <Carousel
            swipeable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderDotsOutside={true}
          >
            {products.length > 0 &&
              products
                .filter((item) => item.prices[0].salePrice !== "")
                .map((item) => (
                  <div key={item.id} style={{ padding: "0 0.6rem" }}>
                    <CardProduct {...item}></CardProduct>
                  </div>
                ))}
          </Carousel>
          <center style={{ marginTop: 20, display: "block" }}>
            <Button
              component={Link}
              href="/category/chuong-trinh-uu-dai"
              className="btn-primary"
              variant="contained"
              color="primary"
              endIcon={<i className="ri-arrow-right-up-line"></i>}
            >
              Xem thêm
            </Button>
          </center>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
