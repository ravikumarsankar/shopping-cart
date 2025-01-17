interface IProduct {
  category: string;
  id: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  image:string;
}
type GroupedProducts = {
  [category: string]: IProduct[];
};
