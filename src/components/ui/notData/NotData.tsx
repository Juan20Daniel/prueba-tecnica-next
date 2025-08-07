import React from 'react';

interface Props {
    title: string;
    message: string;
    children?: React.ReactNode;
}

export const NotData = ({title, message, children}:Props) => {
    return (
        <div className="w-full h-[300px] flex flex-col gap-3 justify-center items-center">
            <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
            <p className="text-sm md:text-2xl">{message}</p>
            {children}
        </div>
    )
}
