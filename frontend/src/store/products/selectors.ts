import { createSelector } from "reselect";
import { AppState } from "store";

const productsPageSelector = (state: AppState) => state.products;

export const fetchedTopSalesSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchTopSales.data ?? []
);

export const topSalesStatusSelector =  createSelector(
  [productsPageSelector],
  (products) => products.fetchTopSales.status
);

export const fetchedItemsSelector = createSelector(
  [productsPageSelector],
  (products) => products.products
);

export const itemsStatusSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchItems.status
)

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

export const fetchedCategoriesStatusSelector = createSelector(
  [productsPageSelector],
  (products) => products.fetchCategories.status 
)

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

export const cartCountSelector = createSelector(
  [productsPageSelector],
  (products) => products.cart.length
);

export const cartSelector = createSelector(
  [productsPageSelector],
  (products) => products.cart
);
