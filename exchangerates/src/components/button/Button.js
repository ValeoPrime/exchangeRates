import React from "react";
import "./button.sass";

export const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={() => props.click(props.arg || "") || undefined}
    >
      {props.text}
    </button>
  );
};
