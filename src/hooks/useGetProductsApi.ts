'use client'; 
import { useLayoutEffect, useState } from 'react';
import { Product, ProductResponseAPI } from '../interfaces/products.interface';
import { useStoreCart } from '@/store/useStoreCart';
import { useGetCartApi } from './useGetCartApi';
import { useStoreProducts } from '@/store/useStoreProducts';

export const useGetProductsApi = () => {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { getProduct } = useStoreProducts();
    const { getCartApi } = useGetCartApi();

    useLayoutEffect(() => {
        getProductsApi();
        getCartApi();
    },[]);
    const getProductsApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/products')
            const {data} = await response.json() as ProductResponseAPI;
            setError(false);
            setProducts(data);
            getProduct(data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    } 

    return {products, isLoading, error}
}
