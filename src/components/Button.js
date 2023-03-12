import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) { //Button component that takes in props and returns a button element
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });
  //Returning the button element with the props passed in
  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
