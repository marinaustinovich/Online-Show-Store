import { createSelector } from "reselect";
import { AppState } from "store";

const productsPageSelector = (state: AppState) => state.products;

export const fetchedTopSalesSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchTopSales.data ?? []
);

export const topSalesStatusSelector = (state: AppState) =>
  state.products.fetchTopSales.status;

export const fetchedItemsSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchItems.data ?? []
);

export const itemsStatusSelector = (state: AppState) =>
  state.products.fetchItems.status;

export const fetchedCategoriesSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchCategories.data ?? []
);
