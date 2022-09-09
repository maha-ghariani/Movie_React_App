import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function CardComponent({movie}) {
  const navigate = useNavigate();
  const handleNavigate = () => { 
        navigate(`/Details/${movie.id}`);

  };
  return (
    
    <Card style={{ width: '18rem',marginTop:40 }}>
      <Card.Img variant="top" src={movie.poster}  alt={`${movie.title}`}  />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={movie.rate}
    edit={false}
  />
  <Button onClick={handleNavigate} variant="primary">
          Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
