'use client'; 
import { useLayoutEffect, useState } from 'react';
import { Product, ProductResponseAPI } from '../interfaces/products.interface';

export const useGetProductsApi = () => {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    useLayoutEffect(() => {
        getProductsApi();
    },[]);
    const getProductsApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/products')
            const {data} = await response.json() as ProductResponseAPI;
            setError(false);
            setProducts(data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    } 

    return {products, isLoading, error}
}
