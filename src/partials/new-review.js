import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import Input from "../components/input";
import TextArea from "../components/text-area";
import RatingInput from "../components/rating-input";

function NewReview(props) {
  const { onCancelClicked, onSaveClicked } = props;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [review, setReview] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [star, setStar] = useState(0);
  const [starError, setStarError] = useState("");

  return (
    <div className="new-review visible-section">
      <h1 className="new-review__title">New review</h1>
      <Input
        label="Your email"
        name="email"
        value={email}
        error={emailError}
        onTextChanged={(e) => {
          setEmailError("");
          setEmail(e.target.value);
        }}
      />
      <Input
        label="Your name"
        name="name"
        value={name}
        error={nameError}
        onTextChanged={(e) => {
          setNameError("");
          setName(e.target.value);
        }}
      />
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
            if (email.trim().length === 0) {
              setEmailError("Email is required");
              error = true;
            } else if (
              !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email
              )
            ) {
              setEmailError("Email is not valid");
              error = true;
            }
            if (name.trim().length === 0) {
              setNameError("Name is required");
              error = true;
            }
            if (star === 0) {
              setStarError("Rating is required");
              error = true;
            }
            if (review.trim().length === 0) {
              setReviewError("Review is required");
              error = true;
            }
            if (error) return;
            onSaveClicked(email, name, star, review);
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
