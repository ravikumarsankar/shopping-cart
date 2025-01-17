
import React from 'react';
import { HEADER_TAB, HEADER_TABS } from '../utils/HeaderUtils';
import classNames from 'classnames';
import { useTab } from './TabContext';


const TabSwitcher = ({setActiveTab}:{setActiveTab:(tab:string)=>void}) => {
  const { activeTab, setTab } = useTab();
 
  const onTabChange = (tab:any) =>{
    setTab(tab);
    setActiveTab(tab);
  }
  return (
     <div className='h-[56px] flex items-center justify-center'>
            <label className="w-[145px] flex justify-center bg-[#0B6B59] text-[#fff] font-bold p-2 rounded-full">Save upto 12%</label>
           <div className='flex pl-[10px]'>
           {
                HEADER_TABS.map((tab)=>{
                    const isCart = tab===HEADER_TAB.CART;
                    const cartClass = isCart?'bg-[#001838] text-[#fff]':'';
                    const proClass = tab===HEADER_TAB.PRO?'bg-[#ccc]':'';
                    const tabClassNames = classNames(['hover:underline w-[115px] h-[55px] flex justify-center items-center cursor-pointer',cartClass,proClass]);
                   if(tab===HEADER_TAB.PRO){
                    return <a  key = {tab} href = 'https://www.patioproductsusa.com/professionals.htm?bid=gnav' className={tabClassNames}>{tab}</a>
                   }
                  return <div key={tab} className={tabClassNames} onClick={()=>onTabChange(tab)}>{tab}</div>
                })
            }</div> 
        </div>
  );
};

export default TabSwitcher;
