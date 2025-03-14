import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://project-awesome.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});
