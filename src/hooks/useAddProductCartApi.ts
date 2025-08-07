'use client'; 
import { useState } from 'react';
import { useGetCartApi } from './useGetCartApi';

export const useAddProductCartApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const { getCartApi } = useGetCartApi();
    const addProductCartApi = async (idProduct:number):Promise<boolean> => {
        try {
            setIsLoading(true);
            await fetch('/api/cart', {
                method:'POST',
                body:JSON.stringify({idProduct}),
                headers: {
                    "Content-Type":"application/json"
                }
            });
            getCartApi();
            setError(false);
            return true;
        } catch (error) {
            console.log(error);
            setError(true);
            return false;
        } finally {
            setIsLoading(false);
        }
    } 

    return {isLoading, error, addProductCartApi}
}
