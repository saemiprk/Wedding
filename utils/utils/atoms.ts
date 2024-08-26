import { atom } from "recoil";

export interface gestBook {
    name: string;
    password: string,
    contents: string
}

export const gestbookState = atom<gestBook>({
    key: 'gestBookState',
    default: {
        name: '',
        password: '',
        contents: '',
    },
});