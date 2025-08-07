import Link from 'next/link';
import React from 'react';

interface Props {
    children?:React.ReactNode;
}

export const Navbar = ({children}:Props) => {
    return (
        <nav className='sticky top-0 w-full h-[60px] flex justify-center shadow-sm bg-white z-3'>
            <div className='w-full max-w-6xl h-full flex items-center justify-between px-4'>
                <Link href='/' className='text-xl font-bold font-mono'>Prueba Técnica</Link>
                {children}
            </div>
        </nav>
    );
}
