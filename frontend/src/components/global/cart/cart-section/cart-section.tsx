import { CartTable, Title } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { classname } from "utils";

import "./cart-section.scss";
import { useAppSelector } from "store";
import { cartCountSelector, cartSelector } from "store/products";

const cn = classname("cart");

export const CartSection = () => {
  const { t } = useTranslation("global");
  const locale = "cart.cart-section";

  const cart = useAppSelector(cartSelector);
  const cartCount = useAppSelector(cartCountSelector);

  return (
    <section className={cn()}>
      <Title text={t(`${locale}.title`)} />
      {cartCount > 0 ? (
        <CartTable cart={cart} />
      ) : (
        <div className={cn("empty-block")}>{t(`${locale}.empty-block`)}</div>
      )}
    </section>
  );
};
