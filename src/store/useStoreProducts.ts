import { Product } from "@/interfaces/products.interface";
import { create } from "zustand";

interface InitialState {
    products: Product[];
    getProduct: (products:Product[]) => void;
}

export const useStoreProducts = create<InitialState>()((set) => ({
    products:[],
    getProduct: (products:Product[]) => {
        set({products:products})
    }
}));