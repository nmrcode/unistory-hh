import React, { useEffect } from "react";
import s from "./CardItem.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getPost } from "../../../../store/postsSlice";

const CardItem = ({ id, title, content }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handlerEditPost = (id) => {
    router.push("edit/" + id);
    dispatch(getPost(id));
  };

  return (
    <article className={s.article}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.content}>
        <span>{content}</span>
      </div>
      <button className={s.button} onClick={() => handlerEditPost(id)}>
        перейти
      </button>
    </article>
  );
};

export default CardItem;
