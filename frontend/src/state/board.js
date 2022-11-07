import { atom, selector } from "recoil";
import axios from "axios";

export const forceReloadBoardListState = atom({
  key: "forceReloadBoardListState",
  default: 0,
});

export const boardSearchState = atom({
  key: "boardSearchState",
  default: {
    nickname: "",
    title: "",
    created: "",
  },
});

export const boardListSelector = selector({
  key: "boardListSelector",
  get: async ({ get }) => {
    const { data } = await axios.get("api/detail", {
      params: boardSearchState,
    });
    return data;
  },
  set: ({ set }) => {
    set(forceReloadBoardListState, Math.random());
  },
});

export const boardWriteState = atom({
  key: "boardWriteState",
  default: {
    title: "",
    content: "",
    writer: "",
  },
});

export const boardWriteSelector = selector({
  key: "boardWriteSelector",
  get: async ({ get }) => {
    const writeParams = get(boardWriteState);
    const { data } = await axios.post("api 주소", {
      params: writeParams,
    });
    return data;
  },
  set: ({ set }) => {
    set();
  },
});
