import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ProductItem, ItemsFilters, fetchItems, fetchItem, fetchTopSales, fetchCategories, Category, FetchedItem, createOrder, OrderRequestState } from 'api';
import { productsActions } from './slice';
import { clearCart } from 'utils';
import i18next from 'i18next';

export const fetchTopSalesAction = createAsyncThunk<ProductItem[], void>('products/fetchTopSales', async (_, { rejectWithValue }) => {
    try {
        const result = await fetchTopSales();

        return result;
    } catch (error) {
        console.error('Error fetching Top Sales', error);
        return rejectWithValue(error);
    }
});

export const fetchItemAction = createAsyncThunk<FetchedItem, string>('products/fetchItem', async (id, { rejectWithValue, dispatch }) => {
    try {
        const result = await fetchItem(id);
        dispatch(productsActions.setFetchedProduct(result));

        return result;
    } catch (error) {
        console.error('Error fetching product', error);
        toast.error(i18next.t('common:commons.notifications.fetch-products-error'));

        return rejectWithValue(error);
    }
});

export const fetchItemsAction = createAsyncThunk<ProductItem[], ItemsFilters>('products/fetchItems', async (data, { rejectWithValue, dispatch }) => {
    try {
        const result = await fetchItems(data);

        dispatch(productsActions.setFetchedItems(result));

        return result;
    } catch (error) {
        toast.error(i18next.t('common:commons.notifications.fetch-products-error'));

        return rejectWithValue(error);
    }
});

export const fetchCategoriesAction = createAsyncThunk<Category[], void>('products/fetchCategories', async (_, { rejectWithValue, dispatch }) => {
    try {
        const result = await fetchCategories();

        dispatch(productsActions.setCategories(result));

        return result;
    } catch (error) {
        console.error('Error fetching categories', error);

        return rejectWithValue(error);
    }
});

export const createOrderAction = createAsyncThunk<void, OrderRequestState>('products/createOrder', async (data, { rejectWithValue, dispatch }) => {
    try {
        const result = await createOrder(data);
        if (result.status === 204) {
            toast.success('Ваш Заказ успешно создан');

            clearCart();
            dispatch(productsActions.clearOrderData());
            dispatch(productsActions.setOrderStatus(true));
        }
    } catch (error) {
        console.error('Error fetching categories', error);
        toast.error(i18next.t('common:commons.notifications.fetch-order-error'));

        return rejectWithValue(error);
    }
});
