'use client'; 
import { useState } from 'react';
import { useGetCartApi } from './useGetCartApi';
import { fetchApi } from '@/helpers/fetch';

export const useAddProductCartApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const { getCartApi } = useGetCartApi();
    const addProductCartApi = async (idProduct:number):Promise<boolean> => {
        try {
            setIsLoading(true);
            await fetchApi({url:'/api/cart', method:'POST', body:JSON.stringify({idProduct})});
            await getCartApi();
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
