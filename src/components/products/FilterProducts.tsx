'use client';
import { Product } from '@/interfaces/products.interface';
import { useStoreAlert } from '@/store/useStoreAlert';
import { useStoreProducts } from '@/store/useStoreProducts';
import React, { useState } from 'react';

export const FilterProducts = () => {
    const [ budget, setBudget ] = useState<number>();
    const [ inputError, setInputError ] = useState('normal');
    const products = useStoreProducts(state => state.products);
    const { openAlert } = useStoreAlert();
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(isNaN(Number(budget))) {
            setInputError('error');
            return openAlert({
                visible:true,
                title:'Error al filtrar',
                message:'El rango ingresado, no es válido.',
                otherMessage:'Solo se aceptan números enteros.'
            });
        }
        setInputError('normal');
        findBestCombination(products, budget!);
    }
    const findBestCombination = (products:Product[], budget:number) => {
        const result = products.filter(product => {
            return product.price <= budget;
        })
        console.log(result);
    }
    return (
        <>
            <p>Buscar productos por medio de un rango aproximado</p>
            <form className='flex gap-2 py-2' onSubmit={onSubmit}>
                <div className={`border-1 ${inputError === 'normal' ? 'border-gray-400' : 'border-red-400' } h-[35px] w-[217px] rounded-md flex gap-1 items-center px-3 justify-between sm:w-[290px] sm:h-[40px]`}>
                    <label className='cursor-pointer text-[14px] text-gray-700 sm:text-[18px]' htmlFor='filter'>
                        Precio maximo:
                    </label>
                    <input 
                        id='filter' 
                        placeholder='Ejem:160'
                        className='text-[14px] w-[80px] outline-none  sm:text-[18px] sm:w-[120px]'
                        type='number'
                        onChange={(e) => setBudget(+e.target.value)}
                    />
                </div>
                <button type='submit' className='w-[45px] text-[12px] bg-gray-200 cursor-pointer rounded-sm transition-all hover:bg-gray-400 active:bg-gray-300 sm:w-[90px] sm:text-[16px]'>
                    Filtrar
                </button>
            </form>
        </>
    )
}
