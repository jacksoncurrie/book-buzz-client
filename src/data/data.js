const serverUrl = "http://localhost:3001";

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

export const addBook = async (token, title, author, imageUrl, description) => {
  try {
    const res = await fetch(`${serverUrl}/books`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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

export const addUser = async (email, name, password) => {
  try {
    const res = await fetch(`${serverUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "email": "${email}",
        "displayName": "${name}",
        "password": "${password}"
      }`,
    });
    if (res.status === 500) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await fetch(`${serverUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "email": "${email}",
        "password": "${password}"
      }`,
    });
    if (res.status === 401) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const setLoginToComputer = (token, userId) => {
  try {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", userId);
  } catch (error) {
    console.error(error);
  }
};

export const getUserDetails = () => {
  try {
    let result = {
      token: sessionStorage.getItem("token"),
      userId: sessionStorage.getItem("userId"),
    };
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const addReview = async (token, bookId, revieweeId, rating, review) => {
  try {
    const res = await fetch(`${serverUrl}/bookReveiws`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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
