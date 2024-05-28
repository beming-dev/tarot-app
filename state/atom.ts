import { atom } from "recoil";
import { tarotType } from "../assets/array";
import { v1 } from "uuid";

export const typeState = atom<string>({
  key: `type/${v1()}`, // Atom's unique key
  default: "tarot", // Atom's default value
});

export const tarotState = atom<string>({
  key: `tarotState/${v1()}`, // Atom's unique key
  default: "tarot", // Atom's default value
});

export const countState = atom<number>({
  key: `countState/${v1()}`, // Atom's unique key
  default: 3, // Atom's default value
});

export const selectedListState = atom<tarotType[]>({
  key: `selectedList/${v1()}`, // Atom's unique key
  default: [], // Atom's default value
});

export const reverseState = atom<boolean>({
  key: `reverseState/${v1()}`, // Atom's unique key
  default: false, // Atom's default value
});

export const subjectState = atom<string>({
  key: `subjectState/${v1()}`, // Atom's unique key
  default: "", // Atom's default value
});
