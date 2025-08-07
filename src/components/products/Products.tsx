'use client';
import React from 'react';
import { useGetProductsApi } from '@/hooks/useGetProductsApi';
import { ProductsGrid } from './ProductsGrid';
import { Error, Loading } from '../ui';

export const Products = () => {
    const {products, isLoading, error} = useGetProductsApi();
    return (
        <div className='w-auto flex justify-center pt-2 mx-4'>
            {isLoading 
                ?   <Loading />
                :   error 
                    ?   <Error 
                            title="Up's" 
                            message='Ocurrio un problema al cargar los productos'
                            solutionMessage='Intentalo mas tarde'
                        />
                    :   <ProductsGrid products={products} />
            }
        </div>
    );
}
