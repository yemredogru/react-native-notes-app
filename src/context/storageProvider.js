import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const StorageContext = React.createContext();

const StorageProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(data => {
      data && setBooks(JSON.parse(data));
      setIsAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, { books, isAuthLoading });

  return (
    <StorageContext.Provider value={{ books, setBooks, isAuthLoading, setIsAuthLoading }}>
      <Provider store={store}>
        {children}
      </Provider>
    </StorageContext.Provider>
  );
}

export const useStorage = () => {
  return React.useContext(StorageContext);
};

export default StorageProvider;
