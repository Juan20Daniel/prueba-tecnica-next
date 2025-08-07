'use client'; 
import { useState } from 'react';

export const useAddProductCartApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    const addProductCartApi = async (idProduct:number) => {
        try {
            setIsLoading(true);
            await fetch('http://localhost:3000/api/cart', {
                method:'POST',
                body:JSON.stringify({idProduct}),
                headers: {
                    "Content-Type":"application/json"
                }
            });
            setError(true);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    } 

    return {isLoading, error, addProductCartApi}
}
