import React from "react";
import s from "./EditPost.module.scss";
import classNames from "classnames";

const EditPost = () => {
  return (
    <div className={s.wrapper}>
      <button className={s.button}>Назад</button>
      <form className={s.form}>
        <label htmlFor="title" className={s.label}>
          Запись 12312312
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title записи"
          className={s.input}
        />
        <textarea
          name="content"
          placeholder="Content записи"
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
