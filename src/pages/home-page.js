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
import { getBooks, addBook, addUser, addReview } from "../data/data";

function HomePage() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    getBooks(search).then((i) => setBooks(i));
  }, [search]);

  return (
    <>
      {page === 0 ? (
        <Header
          onNewPageClicked={() => dispatch(setNewBook())}
          onSearchChanged={(event) => setSearch(event.target.value)}
        />
      ) : null}

      {page === 0 ? (
        <main>
          {books.map((i) => (
            <Card
              key={i._id}
              onCardClicked={() => {
                dispatch(setViewBook());
                setSelectedBook(i);
              }}
              imageSrc={i.imageUrl}
              title={i.bookName}
              author={i.author}
            />
          ))}
        </main>
      ) : null}

      {page === 1 ? (
        <NewBookPage
          onBackClicked={() => dispatch(setHome())}
          onSaveClicked={(title, author, imageUrl, description) => {
            addBook(title, author, imageUrl, description);
            dispatch(setHome());
          }}
        />
      ) : null}

      {page === 2 ? (
        <ViewBookPage
          bookId={selectedBook._id}
          onBackClicked={() => dispatch(setHome())}
          onNewReview={async (bookId, email, name, rating, review) => {
            let user = await addUser(email, name);
            addReview(bookId, user._id, rating, review);
          }}
          coverImg={selectedBook.imageUrl}
          title={selectedBook.bookName}
          author={selectedBook.author}
          description={selectedBook.description}
          reviews={selectedBook.reviews}
        />
      ) : null}

      {page === 0 ? <Footer /> : null}
    </>
  );
}

export default HomePage;
