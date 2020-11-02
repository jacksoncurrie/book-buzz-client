import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/icon-button";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import Input from "../components/input";
import TextArea from "../components/text-area";

function NewBookPage(props) {
  const { onBackClicked } = props;

  return (
    <section className="add-book-page visible-section">
      <IconButton icon={faArrowLeft} onButtonClicked={onBackClicked} />

      <h1>New book</h1>

      <Input label="Book title" name="book-title" />
      <Input label="Author" name="author" />
      <Input label="Cover image URL" name="cover-image" />
      <TextArea label="Description" className="large-text" />

      <div className="submit" style={{ height: "45px" }}>
        <PrimaryButton className="btn--save" type="submit">
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
