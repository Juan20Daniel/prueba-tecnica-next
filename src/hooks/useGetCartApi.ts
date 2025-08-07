'use client'; 
import { useStoreCart } from '@/store/useStoreCart';
import { useState } from 'react';

export const useGetCartApi = () => {
    const [ cart, setCart ] = useState<number[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { getProductsInCart } = useStoreCart();
   
    const getCartApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/cart');
            const {data} = await response.json();
            console.log(data);
            getProductsInCart(data);
            setError(false);
            setCart(data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    } 

    return {cart, isLoading, error, getCartApi}
}