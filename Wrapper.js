import React from "react";
import Router from './App';
import StorageProvider from './src/context/storageProvider';

export default()=>{
    return(
        <StorageProvider>
            <Router 
            
             />
        </StorageProvider>
    )
}