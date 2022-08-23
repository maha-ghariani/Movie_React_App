import React from "react";
import CardComponent from "./CardComponent";
function List({ films, caractere, rate }) {
  return (
    <div
      className="conatiner"
      style={{
        marginTop:10,
        marginLeft:250,
        display: "flex",
        width: "1000px",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {films
        .filter((elt) =>
          elt.title.toLowerCase().includes(caractere.toLowerCase())&& (elt.rate>= rate)
        )
        .map((elt) => (
          <CardComponent key={elt.id} movie={elt} />
        ))}
    </div>
  );
}

export default List;
