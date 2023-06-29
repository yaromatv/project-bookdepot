import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "https://books-backend.p.goit.global"
});

export async function fetchCategoriesList() {
  try {
    const response = await BASE_URL.get("/books/category-list");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTopBooks() {
  try {
    const response = await BASE_URL.get("/books/top-books");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategory(category) {
  try {
    const response = await BASE_URL.get(`/books/category?category=${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksRequest(id) {
  try {
    const response = await BASE_URL.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
