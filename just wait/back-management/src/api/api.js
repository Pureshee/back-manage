import http from "../config/httpConfig";

export const test = () => http.get("/index");
