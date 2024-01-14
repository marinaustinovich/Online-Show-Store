import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  composeBuilder,
  ProductForBuy,
  requestInitial,
  RequestWithStatus,
} from "utils";

import {
  fetchCategoriesAction,
  fetchItemsAction,
  fetchTopSalesAction,
} from "./actions";
import { Category, FetchedItem, OrderFormState, ProductItem } from "api";
import { CategoryIdEnum } from "enums";

type ProductsSliceState = {
  fetchTopSales: RequestWithStatus<ProductItem[]>;
  fetchItems: RequestWithStatus<ProductItem[]>;
  fetchCategories: RequestWithStatus<Category[]>;
  products: ProductItem[];
  activeCategoryId: CategoryIdEnum | null;
  searchProduct: string | null;
  fetchItem: FetchedItem | null;
  cart: ProductForBuy[];
  orderFormData: OrderFormState;
  orderStatus: boolean;
};

const initialState: ProductsSliceState = {
  fetchTopSales: requestInitial(),
  fetchItems: requestInitial(),
  fetchCategories: requestInitial(),
  products: [],
  fetchItem: null,
  activeCategoryId: null,
  searchProduct: null,
  orderFormData: {
    phone: "",
    address: "",
    agreement: false,
  },
  orderStatus: false,
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.products = [];
    },
    setFetchedItems: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.fetchCategories.data = {
        ...state.fetchCategories.data,
        ...action.payload,
      };
    },
    setActiveCategoryId: (state, action: PayloadAction<CategoryIdEnum>) => {
      state.activeCategoryId = action.payload;
    },
    setSearchProduct: (state, action: PayloadAction<string | null>) => {
      state.searchProduct = action.payload;
    },
    setFetchedProduct: (state, action: PayloadAction<FetchedItem | null>) => {
      state.fetchItem = action.payload;
    },
    setOrderFormData: (state, action: PayloadAction<OrderFormState>) => {
      state.orderFormData = action.payload;
    },
    setOrderStatus: (state, action: PayloadAction<boolean>) => {
      state.orderStatus = action.payload;
    },
    setCart: (state, action: PayloadAction<ProductForBuy[]>) => {
      state.cart = action.payload;
    },
    clearOrderData: (state) => {
      state.cart = [];
      state.activeCategoryId = null;
      state.searchProduct = null;
      state.fetchItem = null;
      state.orderFormData = {
        phone: "",
        address: "",
        agreement: false,
      };
    },
  },
  extraReducers: (builder) => {
    composeBuilder(builder, [ fetchTopSalesAction, fetchItemsAction, fetchCategoriesAction ]);
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
