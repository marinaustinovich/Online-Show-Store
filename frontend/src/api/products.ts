import { axios } from 'utils';

export const fetchProduct = async (id: string) => {
    const result = await axios.get(`/product/${id}`);

    return result.data;
};
