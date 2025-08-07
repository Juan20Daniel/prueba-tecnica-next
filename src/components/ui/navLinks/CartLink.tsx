'use client';
import React from 'react';
import Link from 'next/link';
import { useStoreCart } from '@/store/useStoreCart';
import { IoCartOutline } from 'react-icons/io5';

export const CartLink = () => {
    const totalProductsInCart = useStoreCart(state => state.totalProductsInCart);
    return (
        <Link href="/cart" className='relative bg-gray-100 p-2 rounded transition-all hover:bg-gray-300 active:bg-gray-200'>
            <IoCartOutline className='w-5 h-5' />
            {totalProductsInCart !== 0 &&
                <div className='w-[18px] h-[19px] top-[-6px] right-[-6px] absolute bg-blue-500 flex items-center justify-center rounded-2xl'>
                    <span className='text-white text-xs'>{totalProductsInCart}</span>
                </div>
            }
        </Link>
    );
}
