import { create } from "zustand";

interface InitialState {
    totalProductsInCart: number;

    getTotalProductsInCart:(total:number) => void;
}

export const useStoreCart = create<InitialState>()((set) => ({
    totalProductsInCart:0,
    getTotalProductsInCart: (total:number) => {
        set({totalProductsInCart:total});
    }
}));