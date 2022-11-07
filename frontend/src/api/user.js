import axios from "axios";

const auth_axios = axios.create({
  baseURL: "http://k7e106.p.ssafy.io:8081/api/user",
});


export default auth_axios;
