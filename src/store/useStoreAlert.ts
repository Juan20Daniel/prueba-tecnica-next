import { create } from "zustand";

interface Alert {
    visible: boolean;
    title: string;
    message: string;
    otherMessage?: string; 
}

interface InitialState extends Alert {
    openAlert: (options:Alert) => void;
    closeAlert: () => void;
}

export const useStoreAlert = create<InitialState>()((set) => ({
    visible:false,
    title:'',
    message:'',
    otherMessage:undefined,
    openAlert:(options:Alert) => {
        set({
            visible:options.visible,
            title:options.title,
            message: options.message,
            otherMessage: options.otherMessage
        });
    },
    closeAlert:() => {
        set({
            visible:false,
            title:'',
            message:'',
            otherMessage:undefined
        });
    }
}))