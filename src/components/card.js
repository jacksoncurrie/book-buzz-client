import React from "react";

const Card = (props) => {
  const { onCardClicked, title, author, imageSrc } = props;

  return (
    <div onClick={onCardClicked} className="book-card book-card--highlight1">
      <div className="book-card__img">
        <img src={imageSrc} alt="Book cover" />
      </div>
      <h3 className="book-card__title">{title}</h3>
      <h4 className="book-card__author">{author}</h4>
    </div>
  );
};

export default Card;
