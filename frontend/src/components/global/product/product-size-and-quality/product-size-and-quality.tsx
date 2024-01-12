import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "store";
import { fetchedItemSelector, productSizesSelector } from "store/products";
import { RadioButtonsGroup, QuantitySelector, Button } from "components/common";

import { useNavigate } from "react-router-dom";
import { ProductForBuy, addToCart, calculateTotalPrice } from "utils";
import { productsActions } from "store/products/slice";

export const ProductSizeAndQuantity = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { t } = useTranslation("global");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productSizes = useAppSelector(productSizesSelector);
  const product = useAppSelector(fetchedItemSelector);

  const sizes = useMemo(
    () =>
      productSizes
        ? productSizes.filter((size) => size.available).map((size) => size.size)
        : [],
    [productSizes]
  );

  const handleSizeSelect = useCallback(
    (value: string) => setSelectedSize(value),
    []
  );

  const handleQuantityChange = useCallback(
    (newQuantity: number) => setSelectedQuantity(newQuantity),
    []
  );

  const handleProductBuy = useCallback(() => {
    if (!selectedSize || !selectedQuantity || !product) {
      return;
    }

    const productDetailsForBuy: ProductForBuy = {
      name: product.title,
      size: selectedSize,
      count: selectedQuantity,
      price: product.price,
      total: calculateTotalPrice(product.price, selectedQuantity),
      id: product.id,
    };

    try {
      const cart = addToCart(productDetailsForBuy);
      dispatch(productsActions.setCart(cart ?? []));
      navigate("/cart");
    } catch (error) {
      console.error("Error handling localStorage:", error);
    }
  }, [product, selectedSize, selectedQuantity, navigate, dispatch]);

  const showQuantitySelectorAndButton = useMemo(
    () => sizes.length > 0,
    [sizes]
  );

  return (
    <>
      <div className="text-center">
        <RadioButtonsGroup
          label={t("product.sizes-label")}
          options={sizes}
          onSelect={handleSizeSelect}
          selectedOption={selectedSize}
        />
        {showQuantitySelectorAndButton && (
          <QuantitySelector
            maxQuantity={10}
            label={t("product.count-label")}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </div>
      {showQuantitySelectorAndButton && (
        <Button
          disabled={!selectedSize}
          className="btn-danger btn-block btn-lg"
          onClick={handleProductBuy}
        >
          {t("product.buy-btn-label")}
        </Button>
      )}
    </>
  );
};
