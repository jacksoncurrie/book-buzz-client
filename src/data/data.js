const serverUrl = "http://localhost:3000";

export const getBooks = async (search) => {
  try {
    const res = await fetch(
      search.trim().length === 0
        ? `${serverUrl}/books`
        : `${serverUrl}/books/search/${search}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addBook = async (title, author, imageUrl, description) => {
  try {
    const res = await fetch(`${serverUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "bookName": "${title}",
        "author": "${author}",
        "imageUrl": "${imageUrl}",
        "description": "${description}"
      }`,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const userExists = async (email) => {
  try {
    const res = await fetch(`${serverUrl}/user/exists/${email}`);
    const data = await res.text();
    return data === "true";
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (email, name) => {
  try {
    const res = await fetch(`${serverUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "email": "${email}",
        "displayName": "${name}"
      }`,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addReview = async (bookId, revieweeId, rating, review) => {
  try {
    const res = await fetch(`${serverUrl}/bookReveiws`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "bookId": "${bookId}",
        "revieweeId": "${revieweeId}",
        "rating": ${rating},
        "review": "${review}"
      }`,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
