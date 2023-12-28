import { Preloader, Title, TopSalesSection } from "components";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <TopSalesSection>
        <Title text={t("main.best.title")} />
        <Preloader />
      </TopSalesSection>
      <section className="catalog">
        <Title text={t("main.catalog.title")} />
        <Preloader />
      </section>
    </>
  );
};
export default MainPage;
