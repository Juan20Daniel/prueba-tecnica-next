import React from 'react';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';

export const HomeLink = () => {
    return (
        <Link href="/" className='bg-gray-100 p-2 rounded flex gap-3 transition-all hover:bg-gray-300 active:bg-gray-200'>
            <span>Inicio</span>
            <IoHomeOutline className='w-5 h-5' />
        </Link>
    );
}
