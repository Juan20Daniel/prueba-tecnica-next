'use client';
import { useAddProductCartApi } from '@/hooks/useAddProductCartApi';
import { useStoreAlert } from '@/store/useStoreAlert';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';

interface Props {
    idProduct: number;
}

export const BtnAddProductCart = ({idProduct}:Props) => {
    const { addProductCartApi, isLoading:isAdding, error:errorAdding } = useAddProductCartApi();
    const { openAlert } = useStoreAlert();
    
    useEffect(() => {
        if(errorAdding) {
            openAlert({
                visible:true,
                title:'Error',
                message:'Ocurrio un problema al agregar al carrito',
                otherMessage: 'Intentalo mas tarde.'
            });
        }
    },[errorAdding]);
    const addProductCart = async () => {
        if(isAdding) return;
        await addProductCartApi(idProduct);
    }
    return (
        <div className="absolute bottom-1 left-0 w-full h-[30px] z-1 flex justify-center md:h-[35px] md:bottom-[-2px]">
            <button 
                className="bg-white w-[50%] border-1 rounded-4xl border-gray-300 flex justify-center items-center gap-2 cursor-pointer transition-all hover:bg-blue-100"
                onClick={addProductCart}
            >
                <span className="text-[10px] md:text-[13px]">{isAdding ? 'Agregando...' : 'Agregar'}</span>
                <IoCartOutline className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]"  />
            </button>
        </div>
    );
}
