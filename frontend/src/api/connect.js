import axios from "axios";

const connect_axios = axios.create({
  baseURL: "http://k7e106.p.ssafy.io:8081/api",
});


export default connect_axios;
