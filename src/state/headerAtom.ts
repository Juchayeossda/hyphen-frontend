import { atom } from "recoil";

export const isActivePageAtom = atom<number>({
    key: 'isActive',
    default: 1
})

export const searchValueAtom = atom<string>({
    key:'searchValue',
    default:""
})