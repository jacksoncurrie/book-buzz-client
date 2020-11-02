import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHome,
  setNewBook,
  setViewBook,
  selectPage,
} from "../redux/pageSlice";
import Card from "../components/card";
import Footer from "../partials/footer";
import Header from "../partials/header";
import NewBookPage from "./new-book-page";
import ViewBookPage from "./view-book-page";

function HomePage() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    // Get the books
    fetch(
      search.trim().length === 0
        ? "http://localhost:3000/books"
        : `http://localhost:3000/books/search/${search}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [search]);

  return (
    <>
      <Header
        onNewPageClicked={() => dispatch(setNewBook())}
        onSearchChanged={(event) => setSearch(event.target.value)}
      />

      {page === 0 ? (
        <main>
          {books.map((i) => (
            <Card
              key={i._id}
              onCardClicked={() => {
                dispatch(setViewBook());
                setSelectedBook(i);
                console.log(i);
              }}
              imageSrc={i.imageUrl}
              title={i.bookName}
              author={i.author}
            />
          ))}
        </main>
      ) : null}

      {page === 1 ? (
        <NewBookPage onBackClicked={() => dispatch(setHome())} />
      ) : null}

      {page === 2 ? (
        <ViewBookPage
          onBackClicked={() => dispatch(setHome())}
          coverImg={selectedBook.imageUrl}
          title={selectedBook.bookName}
          author={selectedBook.author}
          description={selectedBook.description}
          reviews={selectedBook.reviews}
        />
      ) : null}

      <Footer />
    </>
  );
}

export default HomePage;
