import { Box, Button } from "@mui/material";
import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import Link from "../Link";
import { FANPAGE, INS, isMobile, TIKTOK } from "../../Helper/Helper";
import Fade from "react-reveal/Fade";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const items = [
  {
    img: "/assets/desktop/4.png",
    url: "/category/tim-kiem-san-pham?search=Narciso%20Rodriguez",
  },
  { img: "/assets/desktop/1.png", url: "/product/tom-ford-ombre-leather" },
  {
    img: "/assets/desktop/2.png",
    url: "/category/tim-kiem-san-pham?search=bleu",
  },

  // { img: "/assets/1.png", url: "" },
  // { img: "/assets/1.png", url: "" },
];

const itemsMobile = [
  {
    img: "/assets/mobile/4.png",
    url: "/category/tim-kiem-san-pham?search=Narciso%20Rodriguez",
  },
  { img: "/assets/mobile/1.png", url: "/product/tom-ford-ombre-leather" },
  {
    img: "/assets/mobile/2.png",
    url: "/category/tim-kiem-san-pham?search=bleu",
  },

  // { img: "/assets/1.png", url: "" },
  // { img: "/assets/1.png", url: "" },
];

const Header = () => {
  const getItem = () => {
    return isMobile() ? itemsMobile : items;
  };

  return (
    <section className="header">
      <div className="header__container">
        <div className="header__background">
          <Carousel
            responsive={responsive}
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            arrows={false}
            autoPlaySpeed={7000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // renderDotsOutside={true}
          >
            {getItem().map((item, i) => (
              <Link key={i} href={`${item.url}`}>
                <img className="header__img" src={item.img} />
              </Link>
            ))}
          </Carousel>
        </div>
        {isMobile() && (
          <div className="header__content">
            <div className="header__content-data">
              <Fade left>
                <div className="header__content-title title">
                  <p>Chào mừng đến với</p>
                  Maison De Perfume
                  <p className="header__content-desc">
                    Một tiệm nước hoa nho nhỏ lấy cảm hứng từ những con người có
                    cảm xúc đặc biệt biệt với hương thơm mê hoặc.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="home__social">
              <span className="home__social-follow">Follow Us</span>
              <div className="home__social-links">
                <a
                  href={FANPAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href={INS}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href={TIKTOK}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-tiktok-fill"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Header);
