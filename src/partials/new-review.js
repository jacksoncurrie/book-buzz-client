import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import TextArea from "../components/text-area";
import RatingInput from "../components/rating-input";

function NewReview(props) {
  const { onCancelClicked, onSaveClicked } = props;

  const [review, setReview] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [star, setStar] = useState(0);
  const [starError, setStarError] = useState("");

  return (
    <div className="new-review visible-section">
      <h1 className="new-review__title">New review</h1>
      <RatingInput star={star} setStar={setStar} starError={starError} />
      <TextArea
        label="Review"
        value={review}
        error={reviewError}
        onTextChanged={(e) => {
          setReviewError("");
          setReview(e.target.value);
        }}
      />
      <div className="submit" style={{ marginTop: "20px" }}>
        <PrimaryButton
          className="btn--save"
          type="submit"
          onButtonClicked={() => {
            // Validate inputs
            let error = false;
            if (star === 0) {
              setStarError("Rating is required");
              error = true;
            }
            if (review.trim().length === 0) {
              setReviewError("Review is required");
              error = true;
            }
            if (error) return;
            onSaveClicked(star, review);
          }}
        >
          Save
        </PrimaryButton>
        <SecondaryButton onButtonClicked={onCancelClicked}>
          Cancel
        </SecondaryButton>
      </div>
    </div>
  );
}

export default NewReview;
