'use client';
import React, { createContext, useState, useContext } from 'react';
import { HEADER_TAB } from '../utils/HeaderUtils';


type TabContextType = {
  activeTab: string;
  setTab: (tabId: string) => void;
};


const defaultTabContext: TabContextType = {
  activeTab: '',  
  setTab: () => {},  
};

const TabContext = createContext<TabContextType>(defaultTabContext);


export const useTab = () => {
  return useContext(TabContext);
};


export const TabProvider = ({ children }:{children:any}) => {
  const [activeTab, setActiveTab] = useState<any>('');

  const setTab = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
