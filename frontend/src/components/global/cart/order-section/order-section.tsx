import { useAppDispatch, useAppSelector } from "store";
import { createOrderAction, orderFormDataSelector } from "store/products";
import { Button, Checkbox, FormGroup, Title } from "components";
import React, { ChangeEvent, FormEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ProductForBuy, classname, getCart, required } from "utils";
import { productsActions } from "store/products/slice";

const cn = classname("order");

export const OrderSection = () => {
  const { t } = useTranslation("global");
  const locale = "cart.order-section";

  const orderFormData = useAppSelector(orderFormDataSelector);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value, checked, type } = e.target;

      dispatch(
        productsActions.setOrderFormData({
          ...orderFormData,
          [id]: type === "checkbox" ? checked : value,
        })
      );
    },
    [dispatch, orderFormData]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { phone, address } = orderFormData;
      const selectedProducts = getCart();

      const data = {
        items: selectedProducts.map(({ id, price, count }: ProductForBuy) => ({
          id,
          price,
          count,
        })),
        owner: {
          phone,
          address,
        },
      };

      dispatch(createOrderAction(data));
    },
    [orderFormData, dispatch]
  );

  return (
    <section className={cn()}>
      <Title text={t(`${locale}.title`)} />
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <FormGroup
            id="phone"
            placeholder={t(`${locale}.phone-placeholder`)}
            label={t(`${locale}.phone-label`)}
            value={orderFormData.phone}
            onChange={handleChange}
            validate={required}
          />
          <FormGroup
            id="address"
            placeholder={t(`${locale}.address-placeholder`)}
            label={t(`${locale}.address-label`)}
            value={orderFormData.address}
            onChange={handleChange}
            validate={required}
          />
          <Checkbox
            id="agreement"
            label={t(`${locale}.agreement-label`)}
            checked={orderFormData.agreement}
            onChange={handleChange}
          />
          <Button
            className="btn-outline-secondary"
            type="submit"
            disabled={!orderFormData.agreement}
          >
            {t(`${locale}.design-btn`)}
          </Button>
        </form>
      </div>
    </section>
  );
};
