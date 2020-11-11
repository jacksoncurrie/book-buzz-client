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
import {
  getBooks,
  addBook,
  addUser,
  addReview,
  login,
  setLoginToComputer,
  getUserDetails,
} from "../data/data";
import LoginSignup from "../partials/login-signup";

function HomePage() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  const [requireLogin, setRequireLogin] = useState(false);

  useEffect(() => {
    getBooks(search).then((i) => setBooks(i));
  }, [search, page]);

  return (
    <>
      {page === 0 ? (
        <Header
          onNewPageClicked={() => {
            const userDetails = getUserDetails();
            if (!userDetails.token || !userDetails.userId) {
              setRequireLogin(true);
              return;
            }
            dispatch(setNewBook());
          }}
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
          onSaveClicked={async (title, author, imageUrl, description) => {
            let userDetails = getUserDetails();
            await addBook(
              userDetails.token,
              title,
              author,
              imageUrl,
              description
            );
            dispatch(setHome());
          }}
        />
      ) : null}

      {page === 2 ? (
        <ViewBookPage
          bookId={selectedBook._id}
          onBackClicked={() => dispatch(setHome())}
          onSetLoginRequired={() => setRequireLogin(true)}
          onNewReview={async (bookId, rating, review) => {
            let userDetails = getUserDetails();
            let newReview = await addReview(
              userDetails.token,
              bookId,
              userDetails.userId,
              rating,
              review
            );

            setSelectedBook((prevState) => ({
              ...prevState,
              reviews: [...prevState.reviews, newReview],
            }));
          }}
          coverImg={selectedBook.imageUrl}
          title={selectedBook.bookName}
          author={selectedBook.author}
          description={selectedBook.description}
          reviews={selectedBook.reviews}
        />
      ) : null}

      {requireLogin ? (
        <LoginSignup
          onSaveClicked={async (register, email, password, name) => {
            let result;
            if (register) result = await addUser(email, name, password);
            else result = await login(email, password);
            if (!result) return false;
            setLoginToComputer(result.token, result.userId);
            setRequireLogin(false);
            return true;
          }}
          onCancelClicked={() => setRequireLogin(false)}
        />
      ) : null}

      {page === 0 ? <Footer /> : null}
    </>
  );
}

export default HomePage;
