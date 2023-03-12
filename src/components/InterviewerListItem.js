import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) { //InterviewerListItem component that takes in props and returns a list item element
  const interviewerClass = classNames("interviewers__item", { //Using classNames to conditionally apply classes
    "interviewers__item--selected": props.selected
  });
  return ( //Returning the list item element with the props passed in
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}