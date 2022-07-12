import React from "react";
import s from "./Home.module.scss";
import CardList from "../../ui/cards/card-list/CardList";
import AddPostButton from "../../ui/add-post-button/AddPostButton";

const Home = () => {
  return (
    <>
      <h1 className={s.title}>Блог</h1>
      <CardList />
      <AddPostButton />
    </>
  );
};

export default Home;
