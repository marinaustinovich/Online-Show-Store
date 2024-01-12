import { calculateTotalPrice } from "./calculate";

/**
 * Получить содержимое корзины из localStorage.
 * @returns {Array} Массив товаров в корзине.
 */
export const getCart = () => {
  try {
    const cartStr = localStorage.getItem("cart") || "[]";
    return JSON.parse(cartStr);
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

/**
 * Добавить товар в корзину и сохранить в localStorage.
 * @param {Object} productDetailsForBuy Детали товара для добавления в корзину.
 */

export type ProductForBuy = {
  name: string;
  size: string;
  count: number;
  price: number;
  total: number;
  id: number;
};

export const addToCart = (productDetailsForBuy: ProductForBuy) => {
  try {
    const cart: ProductForBuy[] = getCart();
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.name === productDetailsForBuy.name &&
        item.size === productDetailsForBuy.size
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count += productDetailsForBuy.count;
      cart[existingProductIndex].total = calculateTotalPrice(
        cart[existingProductIndex].price,
        cart[existingProductIndex].count
      );
    } else {
      cart.push(productDetailsForBuy);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    return cart;
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
};

/**
 * Удалить товар из корзины в localStorage по идентификатору.
 * @param {number} id Идентификатор товара для удаления.
 */
export const removeFromCart = (id: number) => {
  try {
    const cart: ProductForBuy[] = getCart();
    const updatedCart = cart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  } catch (error) {
    console.error("Error updating localStorage:", error);
  }
};

export const clearCart = () => {
  try {
    localStorage.removeItem("cart");
  } catch (error) {
    console.error("Error clearing cart from localStorage:", error);
  }
};
