import { createSelector } from "reselect";
import { AppState } from "store";

const productsPageSelector = (state: AppState) => state.products;

export const fetchedTopSalesSelector = createSelector(
  [productsPageSelector],
  (products) => {
    return products.fetchTopSales.data ?? [];
  }
);

export const topSalesStatusSelector = (state: AppState) => state.products.fetchTopSales.status;

