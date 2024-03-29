import axios from "axios";
import authHeader from "../services/AuthHeader";

const defaultHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000//",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Content-Type": "text/html; charset=UTF-8",
  "Authorization": authHeader(),
}
const app = axios.create({
  baseURL: `http://localhost:8081/api/long2short`,
  headers: defaultHeaders,
  withCredentials: true,
});

export default app;
