import React, { useEffect, useState } from "react";
import s from "./EditPost.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost } from "../../../store/postsSlice";

const EditPost = () => {
  const { currentPost } = useSelector((state) => state.posts);
  const [titleLocal, setTitleLocal] = useState(currentPost.title);
  const [contentLocal, setContentLocal] = useState(currentPost.content);

  const router = useRouter();
  const dispatch = useDispatch();

  const { title, id, content } = currentPost;

  const handlerOnNavigateBack = () => {
    router.back();
  };

  const onChangeTitle = (text) => {
    setTitleLocal(text);
  };

  const onChangeContent = (text) => {
    setContentLocal(text);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={handlerOnNavigateBack}>
        Назад
      </button>
      <form className={s.form} onSubmit={handleOnSubmit}>
        <label htmlFor="title" className={s.label}>
          Запись {currentPost.title}
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title записи"
          value={titleLocal}
          onChange={(e) => onChangeTitle(e.target.value)}
          className={s.input}
        />
        <textarea
          name="content"
          placeholder="Content записи"
          value={contentLocal}
          onChange={(e) => onChangeContent(e.target.value)}
          className={s.textarea}
        />
        <div className={s.buttons}>
          <button type="button" className={classNames(s.button, s.button__red)}>
            Удалить
          </button>
          <button type="submit" className={s.button}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
