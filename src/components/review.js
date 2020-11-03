import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Review(props) {
  const { reviewee, stars, review } = props;

  return (
    <div className="review-card review-card--highlight1">
      <h4 className="review-card__title">{reviewee}</h4>
      <p className="review-card__rating">
        {[...Array(stars)].map((_, j) => (
          <span className="star-icon" key={j}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        ))}
      </p>
      <div className="review-card__review">{review}</div>
    </div>
  );
}

export default Review;
