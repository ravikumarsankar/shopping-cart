"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "./productUtils/ProductAPI";
import ProductPopup from "./ProductPopup";
import OutsideInteractionHandler from "./OutsideInteractionHandler";
import Product from "./Product";

const groupByCategory = (products: IProduct[]): GroupedProducts => {
  return products.reduce((acc: GroupedProducts, product: IProduct) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

export function capitalizeFirstLetter(str: string) {
  if (!str) return ""; 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Category = () => {
  const [groupedProducts, setGroupedProducts] = useState<GroupedProducts>({});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [hoveredCategory,setHoveredCategory] = useState<string>('');
  const [selectedProduct,setSelectedProduct] = useState<IProduct>();
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        const grouped = groupByCategory(products);
        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <>
    <OutsideInteractionHandler  onOutsideClick={() => setIsOpen(false)} 
          onOutsideHover={() => setIsOpen(false)} > 
    <div className="flex items-center justify-center">
      {isLoading && <div>Loading...</div>}
      {Object.keys(groupedProducts).map((category) => {
        const label = capitalizeFirstLetter(category);
        return (
           
          <div className=" p-[10px] font-bold text-[12xl] hover:text-[#018de4] underline cursor-pointer" key={category}
          onMouseEnter={() =>{
            setIsOpen(true);
            setHoveredCategory(category)}}

          >
            {label}
          </div>
        );
      })}
    </div>
    {hoveredCategory && isOpen&& <ProductPopup category = {hoveredCategory} groupedProducts={groupedProducts} setSelectedProduct = {setSelectedProduct}/>}
    {selectedProduct&&<div><Product selectedProduct={selectedProduct}/></div>}
    </OutsideInteractionHandler>
    </>
  );
};

export default Category;
