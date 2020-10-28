import axios from "axios";
import baseUrl from "./baseUrl";
import { Message } from "element-ui";
import store from "../store";

let http = {};
let request = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  validateStatus(status) {
    switch (status) {
      case 400:
        Message.error("请求出错");
        break;
      case 401:
        Message.warning({
          message: "授权失败，请重新登录"
        });
        store.commit("loginOut");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        break;
    }
    return status >= 200 && status < 300;
  }
});

request.interceptors.request.use(config => {
  if (store.state.userToken) {
    return config;
  }
  return config;
});

http.get = function(url) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .then(res => {
        if (res.data.code === 1) {
          resolve(res.data.data);
        } else {
          reject(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export default http;
