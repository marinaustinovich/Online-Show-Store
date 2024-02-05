import { axios } from 'utils';

export type Owner = {
    phone: string;
    address: string;
};

export type OrderedProductInfo = {
    id: number;
    price: number;
    count: number;
};

export type OrderRequestState = {
    owner: Owner;
    items: OrderedProductInfo[];
};

export type OrderFormState = Owner & {
    agreement: boolean;
};

export const createOrder = async (data: OrderRequestState) => {
    const result = await axios.post('/order', data);

    return result;
};
