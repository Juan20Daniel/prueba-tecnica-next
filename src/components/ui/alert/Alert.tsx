'use client';
import { useStoreAlert } from '@/store/useStoreAlert';

export const Alert = () => {
    const {visible, title, message, otherMessage, closeAlert} = useStoreAlert();
    return (
        <>
            {visible && <div className='fixed bottom-0 left-0 w-screen h-screen bg-[#0000003a] z-6' />}
            {visible && <div onClick={closeAlert} className='fixed bottom-0 left-0 w-screen h-screen backdrop-blur-[2px] z-6'/>}
            <div className={`fixed bottom-0 w-full left-0 z-7 flex justify-center transform transition-all duration-300 ${!visible && 'translate-y-full'}`}>
                <div className='bg-white rounded-2xl w-full max-w-[450px] min-w-[280px] mx-4 mb-8 p-5'>
                    <p className='font-bold text-2xl mb-3 md:text-3xl'>{title}</p>
                    <p className='font-medium text-[14px] mb-2 md:text-[16px]'>{message}</p>
                    {otherMessage &&
                        <p className='font-medium text-[12px] md:text-[14px]'>{otherMessage}</p>
                    }
                    <div className='flex justify-end'>
                        <button
                            className='px-7 py-1 bg-blue-700 text-white rounded-2xl cursor-pointer transition-all active:bg-blue-500'
                            onClick={closeAlert}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}