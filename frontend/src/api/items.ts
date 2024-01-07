import { CategoryIdEnum } from "enums/category-id-enum";
import { axios } from "utils";
import { ProductItem } from "./top-sales";

export type ItemsFilters = Partial<{
  categoryId: CategoryIdEnum;
  offset: number;
  q: string;
}>;

type Size = {
  size: string;
  available: boolean;
};

export type FetchedItem = ProductItem & {
  color: string;
  heelSize: string;
  manufacturer: string;
  material: string;
  reason: string;
  season: string;
  sizes: Size[];
  sku: string;
};

export const fetchItems = async (filters: ItemsFilters) => {
  const result = await axios.get("/items", { params: filters });

  return result.data;
};

export const fetchItem = async (id: string) => {
  const result = await axios.get(`/items/${id}`);

  return result.data;
};
