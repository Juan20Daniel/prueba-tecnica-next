import { create } from "zustand";

interface InitialState {
    cart: number[];

    getProductsInCart:(total:[]) => void;
}

export const useStoreCart = create<InitialState>()((set) => ({
    cart:[],
    getProductsInCart: (total:number[]) => {
        set({cart:total});
    }
}));