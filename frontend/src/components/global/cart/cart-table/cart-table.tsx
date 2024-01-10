import { useTranslation } from "react-i18next";

import { Button, Table } from "components/common";
import React, { useCallback, useMemo } from "react";
import { ProductForBuy, formatPrice, removeFromCart } from "utils";

type CartTableProps = {
  cart: ProductForBuy[];
  onAfterDelete: ()=> void;
};

export const CartTable = ({ cart, onAfterDelete }: CartTableProps) => {
  const { t } = useTranslation("global");
  const locale = "cart.table";

  const handleProductDelete = useCallback((id: number) => {
    removeFromCart(id);
    onAfterDelete();
  }, [onAfterDelete]);

  const columns = useMemo(
    () => [
      { header: t(`${locale}.number`), accessor: "number" },
      {
        header: t(`${locale}.title`),
        accessor: "title",
        render: (data: { id: string; name: string }) => (
          <a href={`/products/${data.id}`}>{data.name}</a>
        ),
      },
      { header: t(`${locale}.size`), accessor: "size" },
      { header: t(`${locale}.count`), accessor: "count" },
      { header: t(`${locale}.price`), accessor: "price" },
      { header: t(`${locale}.total`), accessor: "total" },
      {
        header: t(`${locale}.actions`),
        accessor: "actions",
        render: (data: { id: number }) => (
          <Button
            className="btn-outline-danger btn-sm"
            onClick={() => handleProductDelete(data.id)}
          >
            {t(`${locale}.delete`)}
          </Button>
        ),
      },
    ],
    [handleProductDelete, t]
  );

  const cartData = useMemo(
    () =>
      cart.map((item, index) => ({
        ...item,
        price: `${formatPrice(item.price)} ${t(`${locale}.ru-currency-label`)}`,
        total: `${formatPrice(item.total)} ${t(`${locale}.ru-currency-label`)}`,
        number: index + 1,
      })),
    [cart, t]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.total, 0),
    [cart]
  );

  const footer = useMemo(
    () => (
      <tr>
        <td colSpan={5} className="text-right">
          {t(`${locale}.total-price-label`)}
        </td>
        <td>{`${formatPrice(totalPrice)} ${t(
          `${locale}.ru-currency-label`
        )}`}</td>
      </tr>
    ),
    [totalPrice, t]
  );

  return (
    <Table
      data={cartData}
      columns={columns}
      includeHead={true}
      footer={footer}
    />
  );
};
