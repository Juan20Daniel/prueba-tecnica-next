import { Product } from "@/interfaces/products.interface";
import { create } from "zustand";

interface InitialState {
    cart: Product[];
    productsIds: number[];
    getProductsInCart:(total:[]) => void;
}

export const useStoreCart = create<InitialState>()((set) => ({
    cart:[],
    productsIds:[],
    getProductsInCart: (productsInCart:Product[]) => {
        const ids = productsInCart.map(product => product.id);
        set({cart:productsInCart, productsIds:ids});

    }
}));