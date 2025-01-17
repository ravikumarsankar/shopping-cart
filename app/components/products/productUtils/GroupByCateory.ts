

export function groupByCategory(products: IProduct[]): GroupedProducts {
  return products.reduce((acc: GroupedProducts, product:IProduct) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
}