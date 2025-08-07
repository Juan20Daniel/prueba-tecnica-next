import Link from 'next/link';
import React from 'react';

export const PageNotFound = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-7xl font-bold md:text-9xl">404</h1>
            <p className="text-2xl md:text-4xl">Página no encontrada</p>
            <Link href='/' className="py-2 px-6 rounded-2xl bg-black text-white transition-all active:bg-gray-700">Volver al inicio</Link>
        </div>
    )
}
