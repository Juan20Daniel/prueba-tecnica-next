'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';
import { useStoreCart } from '@/store/useStoreCart';
import { useStoreProducts } from '@/store/useStoreProducts';
import { Product } from '@/interfaces/products.interface';
import { Loading, NotData, Title } from '../ui';

export const ProductsCart = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ productsInCart, setProductsInCart ] = useState<Product[]>([]);
    const products = useStoreProducts(state => state.products);
    const productsIdInCart = useStoreCart(state => state.cart);
    
    useEffect(() => {
        let productsInCart:Product[] = [];
        productsIdInCart.forEach(idProduct => {
            const result = products.find(product => {
                return idProduct === product.id;
            });
            if(result) {
                productsInCart.push(result);
            }
        });
        setProductsInCart(productsInCart);
        setIsLoading(false);
    },[]);

    return (
        <>
            {isLoading
                ?   <Loading />
                :   !productsInCart.length
                    ?   <NotData 
                            title='No hay productos' 
                            message='Agrega algunos productos al carrito desde la página principal'
                        >
                            <Link href='/' className="py-2 px-6 rounded-2xl bg-black text-white transition-all active:bg-gray-700">Ir</Link>
                        </NotData>   
                    :   <>
                            <div className='sticky top-[0px] h-[140px] px-4 flex items-end justify-center z-2 backdrop-blur-xs sm:top-[0px]'>
                                <div className='w-full max-w-6xl flex flex-col items-start pb-4'>
                                    <Title value='Todos los productos del carrito' />
                                </div>
                            </div>
                            <div className='w-auto flex justify-center pt-2 mx-4'>
                                <ProductsGrid products={productsInCart} />
                            </div>
                        </>
            }
        </>
    );
}