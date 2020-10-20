import React from "react";
import Card from "../components/card";
import Footer from "../partials/footer";
import Header from "../partials/header";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Card
          imageSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
          title="The king of drugs"
          author="Nora Barrett"
        />
        <Card
          imageSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
          title="The king of drugs"
          author="Nora Barrett"
        />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
