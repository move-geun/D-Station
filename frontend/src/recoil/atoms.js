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

export const CameraZoom = atom({
  key: "CameraZoom",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const Openmap = atom({
  key: "Openmap",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const Opennews = atom({
  key: "Opennews",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
