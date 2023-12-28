import { Title, TopSalesSection } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { classname } from "utils";

const cn = classname("404-page");

const ErrorPage = () => {
  const { t } = useTranslation("global");

  return (
    <TopSalesSection className={cn()}>
      <Title text={t("404-page.title")} />
      <p>{t("404-page.content")}</p>
    </TopSalesSection>
  );
};

export default ErrorPage;
