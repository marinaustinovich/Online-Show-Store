import { classname } from "utils";
import { Preloader, Title } from "components";
import React from "react";
import { useTranslation } from "react-i18next";

import "./catalog.scss";

const cn = classname("catalog");

export const Catalog = () => {
  const { t } = useTranslation("global");

  return (
    <section className={cn("")}>
      <Title text={t("main.catalog.title")} />
      <Preloader />
    </section>
  );
};
