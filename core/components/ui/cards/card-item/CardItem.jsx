import React from "react";
import s from "./CardItem.module.scss";

const CardItem = ({ id, title, content }) => {
  return (
    <article className={s.article}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.content}>{content}</div>
      <button className={s.button}>перейти</button>
    </article>
  );
};

export default CardItem;
