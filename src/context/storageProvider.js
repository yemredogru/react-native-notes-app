import React, { useEffect,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from "./reducers";

const StorageProvider=({children})=>{
    const [books,setBooks]=useState(null);
    const [isAuthLoading,setIsAuthLoading]=useState(true);
    useEffect(()=>{
        AsyncStorage.getItem('@USER').then(data=>{
            data && setBooks(JSON.parse(data));
            setIsAuthLoading(false);
        });
    },[])

    const store=legacy_createStore(reducers,{books,isAuthLoading});
    return(
        <Provider store={store}>{children}</Provider>
    )
}
export default StorageProvider;