import React from "react";
import { useSelector } from "react-redux";
import s from "./CardList.module.scss";
import CardItem from "../card-item/CardItem";

const CardList = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className={s.wrapper}>
      {posts.map((post) => (
        <CardItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default CardList;
