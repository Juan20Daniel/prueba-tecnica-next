'use client';
import { useStorageResultFilter } from "@/store/useStorageResultFilter";
import { IoClose } from "react-icons/io5";
import { ProductsGrid } from "./ProductsGrid";

export const FilteredResultsModal = () => {
    const { products, visible, closeModal } = useStorageResultFilter();
    
    return (
        <div className={`fixed left-0 top-0 w-screen h-screen bg-white z-10 overflow-auto  transition-all ${!visible && 'translate-y-full'}`}>
            <div className="sticky top-0 left-0 border-b-1 border-gray-400 bg-white flex justify-center z-2">
                <div className='w-full max-w-6xl h-[60px] flex items-center justify-between px-4 mt-10'>
                    <div className="flex items-center gap-3">
                        <h2 className="text-[16px] font-bold md:text-3xl">Productos encontrados</h2>
                        <div className="w-[8px] h-[8px] bg-black rounded-3xl" />
                        <span className="font-light text-[18px] md:text-2xl">{products.length}</span>
                    </div>
                    <button 
                        className="cursor-pointer bg-gray-100 p-1 rounded transition-all hover:bg-gray-300 active:bg-gray-200"
                        onClick={closeModal}
                    >
                        <IoClose className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
                    </button>
                </div>
            </div>   
            <div className="w-full flex justify-center min-w-[300px] mt-10">
                <ProductsGrid  products={products}/>
            </div>
        </div>
    );
}