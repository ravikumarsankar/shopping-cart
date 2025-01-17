import React, { useEffect, useRef } from "react";

const OutsideInteractionHandler = ({ onOutsideClick, onOutsideHover, children }:any) => {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (onOutsideClick) onOutsideClick();
      }
    };

    const handleHoverOutside = (event:MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (onOutsideHover) onOutsideHover();
      }
    };

    
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("mousemove", handleHoverOutside);

   
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("mousemove", handleHoverOutside);
    };
  }, [onOutsideClick, onOutsideHover]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideInteractionHandler;
