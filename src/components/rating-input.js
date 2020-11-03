import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

function RatingInput(props) {
  const { star, setStar, starError } = props;

  return (
    <div className="input-item input-stars">
      <p className="input-item__label">Rating</p>
      <p className="input-stars__stars">
        {[...Array(star)].map((_, j) => (
          <span className="star-icon star-picker" key={j}>
            <FontAwesomeIcon icon={fasStar} onClick={() => setStar(j + 1)} />
          </span>
        ))}
        {[...Array(5 - star)].map((_, j) => (
          <span className="star-icon star-picker" key={j}>
            <FontAwesomeIcon
              icon={farStar}
              onClick={() => setStar(j + star + 1)}
            />
          </span>
        ))}
      </p>
      <p className="input__error-text">{starError}</p>
    </div>
  );
}

export default RatingInput;
