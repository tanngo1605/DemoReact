import React from "react";
import "./card.styles.css";
export const Card = props => {
  return (
    <div className="card-container">
      <h1>{props.monster.name}</h1>
      <h1>{props.monster.company.name}</h1>
      <h1>{props.monster.address.zipcode}</h1>
      {/* <img alt="heros" src ={`https://www.superheroapi.com/api.php/1272012016316810/${props.monster.id}/image`}></img>*/}
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set3`}
      ></img>
      <p>{props.monster.email}</p>
    </div>
  );
};
