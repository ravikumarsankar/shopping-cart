import classNames from "classnames";
import { useState } from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const barClassName = "flex items-center";
const barLabel = 'pt-[10px]';

interface IGlobalBarProps{
    setIsHovered:(value:boolean) =>void;
}

export const CallCenterHover = () =>{
    return (
        <div className="relative left-[15%] w-[220px] h-[330px] bg-[#fff] z-[9999] border-2 border-[#dadada] font-normal text-[12px] cursor-auto p-[13px] text-left flex flex-col">
          <strong>Ready to Order</strong>
          <a
            href="https://www.patioproductsusa.com/content/contact-us/info.aspx?bid=selfguidance"
            className="cursor-pointer pt-2"
          >
            Talk to our sales executive
          </a>
          <span className="pt-[5px]" >Monday - Friday: 6:00 a.m. to 5:00 p.m. PST</span>
          <span className="pt-[5px]"> Saturday & Sunday: 6:00 a.m. to 3:00 p.m. PST</span>
          <strong className={barLabel}>Already order?</strong>
          <span className={barLabel}>File a Return or Replacement here.</span>

          <span className={barLabel}>View Your Order Status here.</span>

          <span className={barLabel}>For anything else, visit us at our HelpDesk.</span>
        </div>
      )
}
const GlobalBar = (props:IGlobalBarProps) => {
  const {setIsHovered} = props
    return (
      <>
        <div className=" pl-[15px] pr-[15px]">
          <div className="flex item-center font-semibold">
            <div className={barClassName}>
              <PhoneEnabledIcon style={{ width: "15px", height: "15px" }} />
              <span> (855) 298-4922</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                className={classNames(barClassName, "pl-[20px] font-semibold")}
              >
                Call center hours
              </span>
              <ArrowDropDownIcon />
            </div>
           
          </div>
        </div>
       
      </>
    );
  };
  export default GlobalBar;