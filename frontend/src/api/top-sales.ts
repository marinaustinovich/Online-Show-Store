import { axios } from "utils";

type Image = string;

export type FetchedTopSale = {
  category: number;
  id: number;
  images: Image[];
  price: number;
  title: string;
};

export const fetchTopSales = async () => {
  const result = await axios.get("/top-sales");

  return result.data as FetchedTopSale[];
};
