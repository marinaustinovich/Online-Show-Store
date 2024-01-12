import React from "react";

import { classname } from "utils";

import "./banner.scss";
import { useTranslation } from "react-i18next";

const cn = classname("banner");

export const Banner = () => {
  const { t } = useTranslation("global");

  return (
    <div className={cn("")}>
      <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
      <h2 className={cn("header")}>{t('main.banner')}</h2>
    </div>
  );
};
