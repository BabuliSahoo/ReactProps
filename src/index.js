import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="animal_img" width={200} height={300}/>
      <p>{props.color}</p>
      <p>{props.country}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Tiger</h1>
    <Card
      name="Snow Tiger"
      img="tiger1.jpg"
      color="white"
      country="Canada"
    />
    <Card
      name="Tiger"
      img="tiger2.jpg"
      color="red"
      country="India"
    />
  </div>,
  document.getElementById("root")
);
