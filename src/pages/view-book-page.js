import React from "react";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/icon-button";
import Review from "../components/review";

function ViewBookPage(props) {
  const {
    coverImg,
    title,
    author,
    description,
    reviews,
    onBackClicked,
  } = props;

  return (
    <section className="view-book-page visible-section">
      <IconButton icon={faArrowLeft} onButtonClicked={onBackClicked} />

      <div className="book-info">
        <img id="coverImage" src={coverImg} alt="book2" width="225" />
        <div className="book-info__text">
          <h2 className="book-info__title">{title}</h2>
          <h3 className="book-info__author">{author}</h3>
          <p className="book-info__description">{description}</p>
        </div>
      </div>
      <div className="reviews">
        <div className="reviews__header">
          <h2 className="reviews__title">Reviews</h2>
          <IconButton icon={faPlus} />
        </div>
        <div className="reviews-items">
          {reviews.map((i) => (
            <Review
              key={i._id}
              reviewee={i.revieweeId.displayName}
              stars={i.rating}
              review={i.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ViewBookPage;
