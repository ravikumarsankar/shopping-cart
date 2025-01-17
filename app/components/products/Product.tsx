import React from "react";
import { capitalizeFirstLetter } from "./Category";

interface IProductDetails {
  selectedProduct: IProduct;
}
function Product(props: IProductDetails) {
  const { selectedProduct } = props;
  const categoryTitle = capitalizeFirstLetter(selectedProduct.category);
  return (
    <div className="flex flex-col items-center justify-center bg-[#f3f4f6] shadow-2xl rounded-md p-[10px] m-[10px]">
      <strong>{categoryTitle}</strong>
      <i>{selectedProduct.title}</i>
      <img
        className="h-[100px] w-[100px] p-[10px]"
        src={selectedProduct.image}
      ></img>
      <div className="flex">
        <div className="flex p-[10px]">
          <span className="pr-[5px] font-semibold">Price:</span>
          <span>{selectedProduct.price}</span>
        </div>

        <div className="flex p-[10px]">
          <span className="pr-[5px] font-semibold">Rating:</span>
          <span>{selectedProduct.rating.rate}</span>
        </div>
        <div className="flex p-[10px]">
          <span className="pr-[5px] font-semibold">Count:</span>
          <span>{selectedProduct.rating.count}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
