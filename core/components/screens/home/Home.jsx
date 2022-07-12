import React from "react";
import s from "./Home.module.scss";
import CardList from "../../ui/cards/card-list/CardList";
import AddPost from "../../ui/add-post/AddPost";

const Home = () => {
  return (
    <>
      <h1 className={s.title}>Блог</h1>
      <CardList />
      <AddPost />
    </>
  );
};

export default Home;
