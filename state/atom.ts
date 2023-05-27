import { atom } from "recoil";
import { tarotType } from "../assets/array";

export const typeState = atom<string>({
  key: "type", // Atom's unique key
  default: "tarot", // Atom's default value
});

export const tarotState = atom<string>({
  key: "tarotState", // Atom's unique key
  default: "tarot", // Atom's default value
});

export const countState = atom<number>({
  key: "countState", // Atom's unique key
  default: 3, // Atom's default value
});

export const selectedListState = atom<tarotType[]>({
  key: "selectedList", // Atom's unique key
  default: [], // Atom's default value
});

export const reverseState = atom<boolean>({
  key: "reverseState", // Atom's unique key
  default: false, // Atom's default value
});

export const subjectState = atom<string>({
  key: "subjectState", // Atom's unique key
  default: "", // Atom's default value
});
