import { CategoryIdEnum } from "enums/category-id-enum";
import { axios } from "utils";

export type ItemsFilters = Partial<{
  categoryId: CategoryIdEnum;
  offset: number;
}>;

export const fetchItems = async (filters: ItemsFilters) => {
  const result = await axios.get("/items", { params: filters });

  return result.data;
};
