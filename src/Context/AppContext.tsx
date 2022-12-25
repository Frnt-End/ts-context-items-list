import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface ContextProps {
  theData: Array<any>;
  setTheData: React.Dispatch<React.SetStateAction<any>>;
  pageNum: Number;
  setPageNum: React.Dispatch<React.SetStateAction<any>>;
  currentItem: Object | string | number | any;
  setCurrentItem: React.Dispatch<React.SetStateAction<any>>;
}

export const AppContext = createContext({} as ContextProps);

export const AppProvider = ({ children }: any) => {
  const [theData, setTheData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    async function fetchData(pageNum: number) {
      try {
        let rspns = await axios.get(
          `http://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&page=${pageNum}&api_key=db933426-eb41-4dbc-9cda-60bc56b6d916`
        );
        setTheData(rspns.data);
        setPageNum(pageNum);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData(pageNum);
  }, [pageNum]);

  return (
    <AppContext.Provider
      value={{
        theData,
        setTheData,
        pageNum,
        setPageNum,
        currentItem,
        setCurrentItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
