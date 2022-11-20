import http from "../api/http";
import { selector } from "recoil";
import { UserIdState, Galaxy } from "./atoms";

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

export const GalaxySelector = selector({
  key: "GalaxySelector",
  get: async ({ get }) => {
    const galaxyId = get(Galaxy);
    const res = await http.connect_axios.get("/planet/list_by_galaxy", {
      params: { uid: galaxyId },
    });
    return res;
  },
});
