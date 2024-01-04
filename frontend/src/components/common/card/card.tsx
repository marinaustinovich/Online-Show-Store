import { classname, formatPrice } from "utils";
import React from "react";

import "./card.scss";
import { ButtonLink } from "../button";
import { useTranslation } from "react-i18next";
import { ProductItem } from "@api";

type Props = {
  card: ProductItem;
  className?: string;
};
const cn = classname("card");

export const Card = ({ card }: Props) => {
  const { t } = useTranslation("common");
  const { title, price, images, id } = card;

  return (
    <div className="col-4">
      <div className={cn("", ["catalog-item-card"])}>
        <img
          src={images[0]}
          className={cn("img-top", ["img-fluid"])}
          alt={title}
        />
        <div className={cn("body")}>
          <p className={cn("text")}>{title}</p>
          <p className={cn("text")}>
            {formatPrice(price)} {t("card.ru-currency-label")}
          </p>
          <ButtonLink href={`/products/${id}`}>
            {t("card.order-btn-label")}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
