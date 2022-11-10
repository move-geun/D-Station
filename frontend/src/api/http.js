import axios from "axios";

const connect_axios = axios.create({
  baseURL: "http://k7e106.p.ssafy.io:8081/api",
});

const auth_axios = axios.create({
  baseURL: "http://k7e106.p.ssafy.io:8081/api/user",
});

const http = {
  connect_axios,
  auth_axios,
};

export default http;
