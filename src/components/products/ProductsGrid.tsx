import React from 'react';
import { ProductGridItem } from './productGridItem/ProductGridItem';
import type { Product } from '@/interfaces/products.interface';

interface Props {
    products: Product[];
    showMarker?: boolean;
}

export const ProductsGrid = ({products, showMarker=true}:Props) => {
    return (
        <div className='w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10'>
            {products.map(product => (
                <ProductGridItem 
                    key={product.id} 
                    product={product}  
                    showMarker={showMarker} 
                />
            ))}
        </div>
    );
}