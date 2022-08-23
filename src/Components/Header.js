import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-rating-stars-component";

function Header({ setCaractere,setRate }) {
  const handleChange = (e) => {
    setCaractere(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ width: "150px" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        />
      </div>
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        edit={true}
        onChange={ratingChanged}
      />
    </Navbar>
  );
}

export default Header;
