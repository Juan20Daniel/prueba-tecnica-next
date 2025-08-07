'use client';
import React from 'react';

export const FilterProducts = () => {
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <form className='flex gap-2 py-2' onSubmit={onSubmit}>
            <div className='border-1 border-gray-400 h-[35px] w-[217px] rounded-md flex gap-1 items-center px-3 justify-between sm:w-[290px] sm:h-[40px]'>
                <label className='cursor-pointer text-[14px] text-gray-700 sm:text-[18px]' htmlFor='filter'>
                    Filtrar por precio:
                </label>
                <input 
                    id='filter' 
                    placeholder='Ejem:160'
                    className='text-[14px] w-[80px] outline-none  sm:text-[18px] sm:w-[120px]'
                    type='number'
                />
            </div>
            <button type='submit' className='w-[45px] text-[12px] bg-gray-200 cursor-pointer rounded-sm transition-all hover:bg-gray-400 active:bg-gray-300 sm:w-[90px] sm:text-[16px]'>
                Filtrar
            </button>
        </form>
    )
}
