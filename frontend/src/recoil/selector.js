import http from "../api/http";
import { selector } from "recoil";
import { UserInfo } from "./atoms";

export const UserInfoSelector = selector({
  key: "UserInfoSelector",
  get: async () => http.axios.get("/profile"),
});
