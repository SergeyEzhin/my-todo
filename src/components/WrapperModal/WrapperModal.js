import React from "react";
import "./WrapperModal.scss";

export const WrapperModal = (props) => {
  return (
    <div className="wrapper-modal">
      {props.children}
    </div>
  )
};
