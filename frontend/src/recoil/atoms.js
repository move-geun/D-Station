import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserState = atom({
  key: "UserState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const PATState = atom({
  key: "PATState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const UserIdState = atom({
  key: "UserIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const CameraSight = atom({
  key: "CameraSight",
  default: { fov: 110, position: [0, 0, 300] },
  effects_UNSTABLE: [persistAtom],
});
