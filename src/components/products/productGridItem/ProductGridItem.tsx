'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { BtnAddProductCart } from "./BtnAddProductCart";
import type { Product } from "@/interfaces/products.interface";
import { useStoreCart } from "@/store/useStoreCart";

interface Props {
    product: Product;
}

export const ProductGridItem = ({product}:Props) => {
    const [ isAdded, setIsAdded ] = useState(false);
    const cart = useStoreCart(state => state.cart);
    
    // useEffect(() => {
    //     if(cart.includes(product.id)) {
    //         setIsAdded(true);
    //     }
    // },[]);
    return (
        <div className="overflow-hidden">
            <div className="relative w-full aspect-square rounded-2xl px-2 py-4">
                {cart.includes(product.id) && 
                    <div className="absolute bg-blue-600 px-2 py-1 rounded-2xl top-1 right-10 flex items-center justify-center z-1 md:px-3 md:top-0">
                        <span className="text-white select-none text-[10px] md:text-[13px]">Agregado</span>
                    </div>
                }
                <Image
                    src={`/products/${product.img}`}
                    width={500}
                    height={500}
                    alt='Img del producto'
                    className="rounded-2xl shadow-sm"
                    priority
                />
                {!cart.includes(product.id) &&
                    <BtnAddProductCart 
                        idProduct={product.id} 
                        setIsAdded={setIsAdded}
                    />
                }
            </div>
            <div className="flex gap-3 justify-center mb-8 mt-5 md:gap-10">
                <span className="text-xs md:text-base select-none">{product.name}</span>
                <span className="font-bold text-xs md:text-base select-none">${product.price}</span>
            </div>
        </div>
    );
}
