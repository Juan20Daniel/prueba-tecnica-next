'use client'; 
import { useStoreCart } from '@/store/useStoreCart';
import { fetchApi } from '../helpers/fetch';

export const useGetCartApi = () => {
    const { getProductsInCart } = useStoreCart();
  
    const getCartApi = async ():Promise<boolean> => {
        try {
            const response = await fetchApi({url:'/api/cart'});
            const {data} = await response.json();   
            getProductsInCart(data);
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener los productos del carrito.')
        }
    } 

    return {getCartApi}
}