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

export const fetchedItemSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchItem
);


export const productSizesSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchItem?.sizes
);

export const fetchedCategoriesSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchCategories.data ?? []
);

export const activeCategoryIdSelector = createSelector(
  [productsPageSelector],
  (products) => products.activeCategoryId
);

export const searchProductSelector = createSelector(
  [productsPageSelector],
  (products) => products.searchProduct
);

export const orderFormDataSelector = createSelector(
  [productsPageSelector],
  (products) => products.orderFormData
);

export const orderStatusSelector = createSelector(
  [productsPageSelector],
  (products) => products.orderStatus
);

