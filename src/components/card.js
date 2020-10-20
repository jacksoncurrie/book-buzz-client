import React from "react";
import Ripples from "react-ripples";

const Card = (props) => {
  console.log(new Ripples().props.style);
  return (
    <Ripples className="book-card book-card--highlight1" style={{}}>
      {/* <div className="book-card book-card--highlight1"> */}
      <div className="book-card__img">
        <img src={props.imageSrc} alt="Book cover" />
      </div>
      <h3 className="book-card__title">{props.title}</h3>
      <h4 className="book-card__author">{props.author}</h4>
      {/* </div> */}
    </Ripples>
  );
};

export default Card;
