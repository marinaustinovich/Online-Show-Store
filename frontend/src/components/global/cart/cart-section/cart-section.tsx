import { CartTable, Title } from "components";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductForBuy, classname, getCart } from "utils";

import "./cart-section.scss";

const cn = classname("cart");

export const CartSection = () => {
  const { t } = useTranslation("global");

  const [cart, setCart] = useState<ProductForBuy[]>([]);

  useEffect(() => {
    const loadedCart = getCart();
    setCart(loadedCart);
  }, []);

  const updateCart = useCallback(() => {
    const updatedCart = getCart();
    setCart(updatedCart);
  },[])

  return (
    <section className={cn()}>
      <Title text={t("cart.title")} />
      {cart.length > 0 ? (
        <CartTable cart={cart} onAfterDelete={updateCart}/>
      ) : (
        <div className={cn("empty-block")}>{t("cart.empty-block")}</div>
      )}
    </section>
  );
};
