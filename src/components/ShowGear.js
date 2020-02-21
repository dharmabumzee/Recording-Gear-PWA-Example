import React from "react";
import { gear } from "./gear";

export default function ShowGear() {
  let gearList = gear.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <img className="card-image" src={item.img} alt={item.title} />
        <span className="card-title">{item.title}</span>
      </div>
    );
  });

  return <div className="container">{gearList}</div>;
}
