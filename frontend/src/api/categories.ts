import { axios } from 'utils';

export type Category = {
    id: number;
    title: string;
};

export const fetchCategories = async () => {
    const result = await axios.get('/categories');

    return result.data;
};
