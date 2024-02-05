/**
 * Функция для расчета общей стоимости продукта.
 * @param {number} count - Количество единиц товара.
 * @param {number} price - Цена за единицу товара.
 * @return {number} Общая стоимость товара.
 */
export const calculateTotalPrice = (count: number, price: number) => {
    return count * price;
};
