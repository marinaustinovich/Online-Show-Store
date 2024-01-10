import { Button, Checkbox, FormGroup, Title } from "components";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classname } from "utils";

const cn = classname("order");

export const OrderSection = () => {
  const { t } = useTranslation("global");
  const locale = "cart.order-section";

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    agreement: false,
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value, checked, type } = e.target;
 
      setFormData({
        ...formData,
        [id]: type === "checkbox" ? checked : value,
      });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
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
            value={formData.phone}
            onChange={handleChange}
          />
          <FormGroup
            id="address"
            placeholder={t(`${locale}.address-placeholder`)}
            label={t(`${locale}.address-label`)}
            value={formData.address}
            onChange={handleChange}
          />
          <Checkbox
            id="agreement"
            label={t(`${locale}.agreement-label`)}
            checked={formData.agreement}
            onChange={handleChange}
          />
          <Button
            className="btn-outline-secondary"
            type="submit"
            disabled={!formData.agreement}
          >
            {t(`${locale}.design-btn`)}
          </Button>
        </form>
      </div>
    </section>
  );
};
