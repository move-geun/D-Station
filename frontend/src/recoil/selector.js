import http from "../api/http";
import { selector } from "recoil";
import { UserIdState, Usertmp } from "./atoms";
import { useRecoilState } from "recoil";

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
