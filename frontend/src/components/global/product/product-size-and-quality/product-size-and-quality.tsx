import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "store";
import { productSizesSelector } from "store/products";
import { RadioButtonsGroup, QuantitySelector, Button } from "components/common";

export const ProductSizeAndQuantity = () => {
  const { t } = useTranslation("global");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productSizes = useAppSelector(productSizesSelector);

  const sizes = useMemo(
    () =>
      productSizes
        ? productSizes.filter((size) => size.available).map((size) => size.size)
        : [],
    [productSizes]
  );

  const isAddToCartDisabled = useMemo(
    () => !selectedSize || selectedQuantity < 1 || selectedQuantity > 10,
    [selectedSize, selectedQuantity]
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
    if (!isAddToCartDisabled) {
      console.log("Product added to cart:", selectedSize, selectedQuantity);
    }
  }, [selectedSize, selectedQuantity, isAddToCartDisabled]);

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
          disabled={isAddToCartDisabled}
          className="btn-danger btn-block btn-lg"
          onClick={handleProductBuy}
        >
          {t("product.buy-btn-label")}
        </Button>
      )}
    </>
  );
};
