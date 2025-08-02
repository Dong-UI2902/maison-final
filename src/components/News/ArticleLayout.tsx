import React from "react";
import Post1 from "./Posts/Post1";
import { useParams } from "react-router-dom";
import "../../styles/News.scss";
import { Typography } from "@mui/material";
import Breadcrumb from "../Breadcrumb";
import TagHeader from "../TagHeader";
import Link from "../Link";

const POST = [
  {
    id: "tom-ford-black-lacquer-huong-thom-djen-toi-nhat-cua-tom-ford",
    name: "Tom Ford Black Lacquer - Hương Thơm Đen Tối Nhất Của Tom Ford",
    post: <Post1 />,
  },
];

const ArticleLayout = () => {
  const { slug } = useParams();

  return (
    <div className="news container">
      <TagHeader
        title={"Tin tức | Maison de Perfume"}
        url={`https://maisonperfume.net/tin-tuc${slug}`}
      />
      <Breadcrumb>
        <Link underline="hover" color="inherit" href={"/tin-tuc"}>
          Tin tức
        </Link>
        <Typography color="text.primary">Tin tức</Typography>
      </Breadcrumb>
      <div className="news__layout">12312</div>
    </div>
  );
};

export default ArticleLayout;
