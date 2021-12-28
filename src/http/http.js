import axios from "axios";


const baseURL = process.env.FULLBASEROOT;
const timeout = 60000;

export const http = axios.create({
  baseURL,
  timeout,
  headers: {
    Accept: "application/json",
    "Content-Type":
      "application/x-www-form-urlencoded;charset=UTF-8",
  }
});
