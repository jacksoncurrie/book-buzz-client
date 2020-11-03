import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/icon-button";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import Input from "../components/input";
import TextArea from "../components/text-area";

function NewBookPage(props) {
  const { onBackClicked, onSaveClicked } = props;

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  return (
    <section className="add-book-page visible-section">
      <IconButton icon={faArrowLeft} onButtonClicked={onBackClicked} />

      <h1>New book</h1>

      <Input
        label="Book title"
        name="book-title"
        value={title}
        error={titleError}
        onTextChanged={(e) => {
          setTitleError("");
          setTitle(e.target.value);
        }}
      />
      <Input
        label="Author"
        name="author"
        value={author}
        error={authorError}
        onTextChanged={(e) => {
          setAuthorError("");
          setAuthor(e.target.value);
        }}
      />
      <Input
        label="Cover image URL"
        name="cover-image"
        value={imageUrl}
        error={imageUrlError}
        onTextChanged={(e) => {
          setImageUrlError("");
          setImageUrl(e.target.value);
        }}
      />
      <TextArea
        label="Description"
        className="large-text"
        value={description}
        error={descriptionError}
        onTextChanged={(e) => {
          setDescriptionError("");
          setDescription(e.target.value);
        }}
      />
      <div className="submit" style={{ height: "45px" }}>
        <PrimaryButton
          className="btn--save"
          type="submit"
          onButtonClicked={() => {
            // Validate inputs
            let error = false;
            if (title.trim().length === 0) {
              setTitleError("Title is required");
              error = true;
            }
            if (author.trim().length === 0) {
              setAuthorError("Author is required");
              error = true;
            }
            if (imageUrl.trim().length === 0) {
              setImageUrlError("Cover image URL is required");
              error = true;
            }
            if (description.trim().length === 0) {
              setDescriptionError("Description is required");
              error = true;
            }

            if (error) return;
            onSaveClicked(title, author, imageUrl, description);
          }}
        >
          Save
        </PrimaryButton>
        <SecondaryButton onButtonClicked={onBackClicked}>
          Cancel
        </SecondaryButton>
      </div>
    </section>
  );
}

export default NewBookPage;
