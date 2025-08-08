import { create } from "zustand";
import type { Product } from "@/interfaces/products.interface";

interface InitiaState {
    products: Product[];
    visible: boolean;

    openModal: (products:Product[]) => void;
    closeModal: () => void;
}

export const useStorageResultFilter = create<InitiaState>()((set) => ({
    products:[],
    visible: false,
    openModal: (products:Product[]) => {
        set({
            visible:true,
            products:products
        });
    },
    closeModal:() => {
        set({
            visible:false, 
            products:[]
        });
    }
}));