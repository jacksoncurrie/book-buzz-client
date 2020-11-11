import React, { useState } from "react";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/icon-button";
import Review from "../components/review";
import NewReview from "../partials/new-review";
import { getUserDetails } from "../data/data";

function ViewBookPage(props) {
  const {
    bookId,
    coverImg,
    title,
    author,
    description,
    reviews,
    onBackClicked,
    onNewReview,
    onSetLoginRequired,
  } = props;

  const [newReview, setNewReview] = useState(false);

  return (
    <section className="view-book-page visible-section">
      <IconButton icon={faArrowLeft} onButtonClicked={onBackClicked} />

      <div className="book-info">
        <img
          id="coverImage"
          src={coverImg}
          alt="book2"
          width="250"
          style={{ objectFit: "cover" }}
        />
        <div className="book-info__text">
          <h2 className="book-info__title">{title}</h2>
          <h3 className="book-info__author">{author}</h3>
          <p className="book-info__description">{description}</p>
        </div>
      </div>
      <div className="reviews">
        <div className="reviews__header">
          <h2 className="reviews__title">Reviews</h2>
          <IconButton
            icon={faPlus}
            onButtonClicked={() => {
              // Scroll to top of page
              const page = document.querySelector(".view-book-page");
              page.scrollTop = 0;

              const userDetails = getUserDetails();
              if (!userDetails.token || !userDetails.userId) {
                onSetLoginRequired(true);
                return;
              }
              setNewReview(true);
            }}
          />
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

      {newReview ? (
        <NewReview
          onSaveClicked={async (rating, review) => {
            await onNewReview(bookId, rating, review);
            setNewReview(false);
          }}
          onCancelClicked={() => {
            setNewReview(false);
          }}
        />
      ) : null}
    </section>
  );
}

export default ViewBookPage;
