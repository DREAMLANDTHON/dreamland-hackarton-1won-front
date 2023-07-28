import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userInfo",
  storage: localStorage,
});

export const userInfoRecoil = atom({
  key: "userInfo",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const allergiesRecoil = atom({
  key: "allergies",
  default: [],
});

export const specialTypesRecoil = atom({
  key: "specialTypes",
  default: [],
});
