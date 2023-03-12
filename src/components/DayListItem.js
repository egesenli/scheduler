import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) { //DayListItem component that takes in props and returns a list item element
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  //Returning the list item element with the props passed in
  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">
        {props.spots === 0 ? "no spots remaining" : `${props.spots} spot${props.spots === 1 ? "" : "s"} remaining`}
      </h3>
    </li>
  );
}