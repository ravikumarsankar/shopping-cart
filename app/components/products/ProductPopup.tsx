import React, { useState } from "react";

interface IProductProps {
  category: string;
  groupedProducts: GroupedProducts;
  setSelectedProduct:(product:IProduct)=>void;
}
const ProductPopup = (props: IProductProps) => {
  const { category, groupedProducts,setSelectedProduct} = props;
 
  const currentCategory = groupedProducts?.[category];
  const onProductClk = (product:IProduct) => {
    setSelectedProduct(product)
  };
  return (
    <div className=" w-fit absolute left-[35%] p-[10px] bg-[#f3f4f6] shadow-2xl rounded-md text-xs">
      {currentCategory?.map((product) => {
        return (
          <div key={product.id} className="flex items-center">
            <div className="w-[30px] h-[30px]">
             
              <img
                className="w-[30px] h-[30px]  p-[5px]"
                src={product.image}
              ></img>
            </div>
            <div
              className="hover:underline cursor-pointer"
              onClick={()=>onProductClk(product)}
            >
             
              {product.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPopup;
