import React, { useState } from "react";
import s from "../edit-post/EditPost.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addPost } from "../../../store/postsSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const handlerOnNavigateToHome = () => {
    // Просто возвращаем на домашнюю страницу
    router.push("/");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Добавить пост с пустыми полями не получится
    if (!title || !content) return;
    // Вызываем addPost и в качестве Payload кидаем локальные стейты
    dispatch(addPost({ title, content }));
    // Перекидываем на домашнюю страницу
    router.push("/");
  };

  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={handlerOnNavigateToHome}>
        На домашнюю страницу
      </button>
      <form className={s.form} onSubmit={handleOnSubmit}>
        <label htmlFor="title" className={s.label}>
          Заголовок нового поста: {title}
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title записи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={s.input}
        />
        <textarea
          name="content"
          placeholder="Content записи"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={s.textarea}
        />
        <div className={s.buttons}>
          <button type="submit" className={s.button}>
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
