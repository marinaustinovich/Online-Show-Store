import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "store";
import { productSizesSelector } from "store/products";
import { RadioButtonsGroup } from "components/common";

export const ProductSizeAndQuantity = () => {
  const { t } = useTranslation("global");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const productSizes = useAppSelector(productSizesSelector);

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

  return (
    <>
      <div className="text-center">
        <RadioButtonsGroup
          label={t("product.sizes-label")}
          options={sizes}
          onSelect={handleSizeSelect}
          selectedOption={selectedSize}
        />
        <p>
          Количество:
          <span className="btn-group btn-group-sm pl-2">
            <button className="btn btn-secondary">-</button>
            <span className="btn btn-outline-primary">1</span>
            <button className="btn btn-secondary">+</button>
          </span>
        </p>
      </div>
      <button className="btn btn-danger btn-block btn-lg">В корзину</button>
    </>
  );
};
