import React from "react";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import '../detailStyle.css';
function Details({ films }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const getId = useParams();

  const foundFilm = films.find((elt) => elt.id === getId.id);
  return (
    <div 
      style={{
        margin: "70px auto",
    
        backgroundColor: "white",
        boxShadow: "12px 10px 11px 13px gray",
        width: "900px",
        height: 820,
        borderRadius: 10,
        paddingTop: 25,
      }}
    >
      <h1 className="detail">Detail: {foundFilm.title}</h1>
      <br />
      <iframe
      width="560"
      height="315"
      src={foundFilm.video}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
      
      <h1>Description: </h1>
      <h2>{foundFilm.description} </h2>
      <br />

      <Button className="button" onClick={handleClick}>
      Back Home
    </Button>

     

      
    </div>
  );
}

export default Details;
