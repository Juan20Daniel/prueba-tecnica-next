'use client';
import React, { useState } from 'react';
import { useStoreAlert } from '@/store/useStoreAlert';
import { useStoreProducts } from '@/store/useStoreProducts';
import { useStorageResultFilter } from '@/store/useStorageResultFilter';
import { IoClose } from 'react-icons/io5';
import type { Product } from '@/interfaces/products.interface';

export const FilterProducts = () => {
    const [ budget, setBudget ] = useState('');
    const [ inputError, setInputError ] = useState('normal');
    const { products } = useStoreProducts();
    const { openModal } = useStorageResultFilter();
    const { openAlert } = useStoreAlert();
    const activeAlert = () => {
        return openAlert({
            visible:true,
            title:'Error al filtrar',
            message:'El rango ingresado, no es válido.',
            otherMessage:'Solo se aceptan números enteros positivos.'
        });
    }
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        let budget_copy = +budget;
        if(isNaN(Number(budget_copy)) || !budget_copy) {
            setInputError('error');
            return activeAlert();
        }
        if(budget_copy <= 0) {
            setInputError('error');
            return activeAlert();
        }
        setInputError('normal');
        findBestCombination(products, budget_copy);
    }

    const orderProducts = (products:Product[]):Product[] => {
        return products.sort((a,b) => {
            if(a.price < b.price) {
                return -1;
            } 
            if(a.price > b.price) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    const findBestCombination = (products:Product[], budget:number) => {
        products = orderProducts(products);
        const firstProduct = products[0];
        const secundProduct = products[1];
        
        if(firstProduct.price + secundProduct.price > budget) {
            if(firstProduct.price > budget) {
                return openAlert({
                    visible:true,
                    title:'Resultados',
                    message:'No se encontraron productos con el rango ingresado.',
                    otherMessage:'Intenta aumentar el rango.'
                });
            } else {
                return openModal([firstProduct]);
            }
        }
        
        const bestConbinations = [];
        let indexCounter = 0;
        let finish = false;
        while(indexCounter < products.length-1) {
            if(finish) break;
            let combination = [];
            let counter = 0;
            let firstSuma = 0;
            for(let i=indexCounter;i<=products.length-1; i++) {
                if(counter===0) {
                    if(!(!!products[i+1])) {
                        finish=true;
                        break;
                    }
                    firstSuma = products[indexCounter]["price"] + products[i+1]["price"];
                } else {
                    if(!(!!products[i+1])) {
                        finish=true;
                        break;
                    }
                    counter = counter + products[i+1]["price"];
                }
            
                if(firstSuma <= budget && counter === 0) {
                    counter = counter+firstSuma;
                    combination.push(products[indexCounter]);
                    combination.push(products[i+1]);
                } else if(counter <= budget) {
                    combination.push(products[i+1]);
                } else {
                    finish=true;
                    break;
                }
            }
            indexCounter++;
            if(combination.length) {
                bestConbinations.push(combination);
            }
        }
        openModal(bestConbinations[0]);       
    }
    return (
        <>
            <p>Encontrar la combinación de productos con el mayor valor total</p>
            <form className='flex gap-2 py-2' onSubmit={onSubmit}>
                <div className={`border-1 ${inputError === 'normal' ? 'border-gray-400' : 'border-red-400' } h-[35px] w-[217px] rounded-md flex gap-1 items-center px-1 sm:w-[290px] sm:h-[40px]`}>
                    <label className='cursor-pointer text-[14px] text-gray-700 sm:text-[18px]' htmlFor='filter'>
                        Tu presupuesto:
                    </label>
                    <input 
                        id='filter' 
                        placeholder='Ejem:160'
                        className='text-[14px] w-[80px] outline-none  sm:text-[18px] sm:w-[120px]'
                        type='number'
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                    {budget !== '' && 
                        <button onClick={() => {
                            setBudget('');
                            setInputError('normal');
                        }} className='cursor-pointer' type='button'>
                            <IoClose className='w-[16px] h-[16px] p-[2px] bg-gray-500 rounded-2xl transition-all active:bg-gray-300' color='white'/>
                        </button>
                    }
                </div>
                <button type='submit' className='w-[45px] text-[12px] bg-gray-200 cursor-pointer rounded-sm transition-all hover:bg-gray-400 active:bg-gray-300 sm:w-[90px] sm:text-[16px]'>
                    Buscar
                </button>
            </form>
        </>
    );
}