import http from "../api/http";
import { selector } from "recoil";
import { UserIdState } from "./atoms";
import { useRecoilState } from "recoil";

export const userInfoSelector = selector({
  key: "userInfoSelector",
  get: async ({ get }) => {
    const getuserId = get(UserIdState);
    console.log(getuserId, "셀렉터호출됨");
    console.log("data 실행될 차례");
    const { data } = await http.axios.get("/profile", {
      params: getuserId,
    });

    return data;
  },
});
