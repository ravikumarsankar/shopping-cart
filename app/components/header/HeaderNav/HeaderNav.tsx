
import React from 'react';
import { TabProvider } from './TabContext';
import TabSwitcher from './TabSwticher';
import TabRenderer from './TabRenderer';




const HeaderNav = ({setActiveTab}:{setActiveTab:(tab:any)=>void}) => {
  return (
    <TabProvider>
      <div>
        <TabSwitcher setActiveTab = {setActiveTab}/>
      
      </div>
    </TabProvider>
  );
};

export default HeaderNav;
