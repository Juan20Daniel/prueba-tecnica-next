'use client'; 
import { useLayoutEffect, useState } from 'react';
import { Product, ProductResponseAPI } from '../interfaces/products.interface';
import { useStoreProducts } from '@/store/useStoreProducts';
import { fetchApi } from '@/helpers/fetch';
import { useStoreCart } from '@/store/useStoreCart';
export const useGetProductsApi = () => {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { getProduct } = useStoreProducts();
    const { getProductsInCart } = useStoreCart();
    useLayoutEffect(() => {
        getProductsApi();
    },[]);
    const getProductsApi = async () => {
        try {
            getProductsInCart([]);
            setIsLoading(true);
            const productsPromise = fetchApi({url:'/api/products'});
            const removeProductsPromise = fetchApi({url:'/api/cart', method:'DELETE'});

            const responses = await Promise.all([
                productsPromise,
                removeProductsPromise
            ]);
            const {data} = await responses[0].json() as ProductResponseAPI;
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
