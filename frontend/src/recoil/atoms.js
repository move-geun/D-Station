import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserLogin = atom({
  key: "UserLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const PATState = atom({
  key: "PATState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const UserIdState = atom({
  key: "UserIdState",
  default: "guest",
  effects_UNSTABLE: [persistAtom],
});

export const CameraSight = atom({
  key: "CameraSight",
  default: { fov: 110, position: [0, 0, 300] },
  effects_UNSTABLE: [persistAtom],
});

export const UserInfo = atom({
  key: "UserInfo",
  default: {
    rankName: null,
    imageUrl: null,
    userId: null,
    userNickname: null,
    exp: null,
    maxExp: null,
    expNow: null,
    expPer: null,
  },
  effects_UNSTABLE: [persistAtom],
});
