'use client'; 
import { useStoreCart } from '@/store/useStoreCart';
import { useState } from 'react';

export const useGetCartApi = () => {
    const [ cart, setCart ] = useState<number[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { getTotalProductsInCart } = useStoreCart();
   
    const getCartApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/api/cart')
            const {data} = await response.json();
            getTotalProductsInCart(data.length);
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