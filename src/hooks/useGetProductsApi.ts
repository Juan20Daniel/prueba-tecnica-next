'use client'; 
import { useLayoutEffect, useState } from 'react';
import { Product, ProductResponseAPI } from '../interfaces/products.interface';
import { useGetCartApi } from './useGetCartApi';
import { useStoreProducts } from '@/store/useStoreProducts';
import { fetchApi } from '@/helpers/fetch';
export const useGetProductsApi = () => {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { getProduct } = useStoreProducts();
    const { getCartApi } = useGetCartApi();

    useLayoutEffect(() => {
        getProductsApi();
    },[]);
    const getProductsApi = async () => {
        try {
            setIsLoading(true);
            const productsPromis = fetchApi({url:'/api/products'});
            const removeProductsPromis = fetchApi({url:'/api/cart', method:'DELETE'});

            const responses = await Promise.all([
                productsPromis,
                removeProductsPromis
            ]);
            const {data} = await responses[0].json() as ProductResponseAPI;
            setError(false);
            setProducts(data);
            getProduct(data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            getCartApi();
            setIsLoading(false);
        }
    } 

    return {products, isLoading, error}
}
