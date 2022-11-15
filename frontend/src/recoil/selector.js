import http from "../api/http";
import { selector } from "recoil";
import { UserIdState, UserTmp } from "./atoms";
import { useRecoilState } from "recoil";

const UseTmpFun = (data) => {
  const [getuserTmp, setgetUserTmp] = useRecoilState(UserTmp);
  setgetUserTmp(data);
  console.log(getuserTmp);
};

export const userInfoSelector = selector({
  key: "userInfoSelector",
  get: async ({ get }) => {
    const getuserId = get(UserIdState);
    console.log(getuserId, "셀렉터호출됨");
    console.log("data 실행될 차례");
    const { data } = await http.axios.get("/profile", {
      params: getuserId,
    });
    UseTmpFun(data);

    return data;
  },
});
