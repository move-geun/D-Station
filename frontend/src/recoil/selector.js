import http from "../api/http";
import { selector } from "recoil";
import { UserIdState } from "./atoms";

export const userInfoSelector = selector({
  key: "userInfoSelector",
  get: async ({ get }) => {
    const getuserId = get(UserIdState);
    const res = await http.connect_axios.get("/profile/", {
      params: { userId: getuserId },
    });
    return res.data;
  },
});

export const userStudySelector = selector({
  key: "userStudySelector",
  get: async ({ get }) => {
    const getuserId = get(UserIdState);
    const res = await http.connect_axios.get("/profile/planet", {
      params: { userId: getuserId },
    });
    return res;
  },
});
