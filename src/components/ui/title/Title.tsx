import React from "react";

interface Props {
    value: string;
}

export const Title = ({value}:Props) => {
    return (
        <h1 className='text-2xl text-black font-bold sm:text-4xl'>{value}</h1>        
    );
}
