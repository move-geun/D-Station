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

export const FrontSelector = selector({
  key: "FrontSelector",
  get: async ({ get }) => {
    const res = await http.connect_axios.get("/planet/list_by_galaxy", {
      params: { uid: 1 },
    });
    return res;
  },
});

export const BackSelector = selector({
  key: "BackSelector",
  get: async ({ get }) => {
    const res = await http.connect_axios.get("/planet/list_by_galaxy", {
      params: { uid: 2 },
    });
    return res;
  },
});

export const DevOpsSelector = selector({
  key: "DevOpsSelector",
  get: async ({ get }) => {
    const res = await http.connect_axios.get("/planet/list_by_galaxy", {
      params: { uid: 3 },
    });
    return res;
  },
});
