import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="user"
        src={`https://robohash.org/${props.children.id}?set=set2&size=180x180`}
      />
      <h2> {props.children.name}</h2>
      <h2> {props.children.email}</h2>
    </div>
  );
};
