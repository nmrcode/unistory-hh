import React from "react";
import s from "./AddPost.module.scss";
import { useRouter } from "next/router";

const AddPostButton = () => {
  const router = useRouter();
  const onButtonClick = () => {
    router.push("/add-post");
  };

  return (
    <button className={s.button} onClick={onButtonClick}>
      + Добавить
    </button>
  );
};

export default AddPostButton;
