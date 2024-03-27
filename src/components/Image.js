import React from "react";
import "./Image.css";
import { useRef, useState } from "react";

export const Image = () => {
  const inputRef = useRef(null);
  const [img, setImg] = useState("");

  const handelImg = () => {
    inputRef.current.click();
  };

  const handelImgChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
  };

  return (
    <>
      <div className="div-img"onClick={handelImg}>
        {img ? (
          <img src={URL.createObjectURL(img)} alt="" />
        ) : (
          <img src="./camera.png" alt="" />
        )}
        <input type="file" ref={inputRef} onChange={handelImgChange} />
      </div>
    </>
  );
};
