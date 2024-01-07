import { useTranslation } from "react-i18next";
import { ProductTableFieldEnum } from "enums";

import { FetchedItem } from "api";
import { Table } from "components/common";
import React, { useMemo } from "react";


type ProductTableProps = {
  product: FetchedItem;
};

export const ProductTable = ({ product }: ProductTableProps) => {
  const { t } = useTranslation("global");
  const tField = "product.table";

  const productData = useMemo(() => {
    const data: Record<string, string> = {};

    Object.keys(ProductTableFieldEnum).forEach((key) => {
      const enumKey = key as keyof typeof ProductTableFieldEnum;
      data[t(`${tField}.${ProductTableFieldEnum[enumKey]}`)] =
        product[ProductTableFieldEnum[enumKey]] ?? '';
    });

    return data;
  }, [t, product]);

  return <Table data={productData} />;
};
