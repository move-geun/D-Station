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


export const TilState = atom({
  key: "TilState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const QuizIntoThree = atom({
  key: "QuizIntoThree",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const CTIntoThree = atom({
  key: "CTIntoThree",
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const NavMissionIntoThree = atom({
  key: "NavMissionIntoThree",
  default: null,
  effects_UNSTABLE: [persistAtom],
})

