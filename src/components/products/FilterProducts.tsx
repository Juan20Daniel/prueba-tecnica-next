'use client';
import React, { useState } from 'react';
import { Product } from '@/interfaces/products.interface';
import { useStoreAlert } from '@/store/useStoreAlert';
import { useStoreProducts } from '@/store/useStoreProducts';

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


// const products = [
//     { "id": 1, "name": "Producto 1", "price": 30 },
//     { "id": 3, "name": "Producto 3", "price": 220 },
//     { "id": 1, "name": "Producto 1", "price": 60 },
//     { "id": 3, "name": "Producto 3", "price": 520 },
//     { "id": 2, "name": "Producto 2", "price": 100 },
//     { "id": 1, "name": "Producto 1", "price": 60 },
//     { "id": 4, "name": "Producto 4", "price": 70 },
//     { "id": 3, "name": "Producto 3", "price": 220 },
//     { "id": 1, "name": "Producto 1", "price": 60 },
//     { "id": 3, "name": "Producto 3", "price": 420 },
//     { "id": 4, "name": "Producto 4", "price": 70 },
//     { "id": 4, "name": "Producto 4", "price": 70 },
//     { "id": 3, "name": "Producto 3", "price": 320 },
//     { "id": 4, "name": "Producto 4", "price": 70 },
//     { "id": 3, "name": "Producto 3", "price": 120 },

// ]
// const orderProducts = (products) => {
//     return products.sort((a,b) => {
//         if(a.price < b.price) {
//             return -1;
//         } 
//         if(a.price > b.price) {
//             return 1;
//         } else {
//             return 0;
//         }
//     })
// }

// const findBestCombination = (products, budget) => {
//     products = orderProducts(products);

//     const bestConbinations = [];
//     let indexCounter = 0;
//     let finish = false;
//     while(indexCounter < products.length-1) {
//         if(finish) break;
//         let combination = [];
//         let counter = 0;
//         let fisrtSuma = 0;
//         for(let i=indexCounter;i<=products.length-1; i++) {
//             if(counter===0) {
//                 if(!!products[i+1] === false) {
//                     finish=true;
//                     break;
//                 }
//                 fisrtSuma = products[indexCounter]["price"] + products[i+1]["price"];
//             } else {
//                 if(!!products[i+1] === false) {
//                     finish=true;
//                     break;
//                 }
//                 counter = counter + products[i+1]["price"];
//             }
           
//             if(fisrtSuma <= budget && counter === 0) {
//                 counter = counter+fisrtSuma;
//                 combination.push(products[indexCounter]);
//                 combination.push(products[i+1]);
//             } else if(counter <= budget) {
//                 combination.push(products[i+1]);
//             } else {
//                 finish=true;
//                 break;
//             }
//         }
//         indexCounter++;
//         if(combination.length) {
//             bestConbinations.push(combination);
//         }
//     }
//     console.log(bestConbinations[0]);
// }

// findBestCombination(products, 250);