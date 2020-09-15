import React from "react";

export const AddClass = (Component, className) => {
  return (props) => {
      console.log(props)
    return (
      <div className={className}>
        <Component/>
      </div>
    );
  };
};
