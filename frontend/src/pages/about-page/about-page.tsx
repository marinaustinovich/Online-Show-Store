import { ListItem, Title, TopSalesSection, OrderedList } from "components";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classname } from "utils";

const cn = classname("about-page");

const AboutPage = () => {
  const { t } = useTranslation("global");

  const listItems: ListItem[] = useMemo(
    () => [
      {
        text: t("about.offer-list.individual-approach"),
      },
      {
        text: t("about.offer-list.sales"),
      },
      {
        text: t("about.offer-list.wide-selection"),
      },
      {
        text: t("about.offer-list.responsibility"),
      },
      {
        text: t("about.offer-list.moms-selection"),
      },
    ],
    [t]
  );

  return (
    <TopSalesSection className={cn()}>
      <Title text={t("about.title")} />

      <p>{t("about.welcome-message")}</p>
      <p className="h4 text-center">{t("about.special-offer-header")}</p>

      <OrderedList list={listItems} />

      <p>{t("about.closing-message")}</p>
      <p>{t("about.product-range")}</p>
    </TopSalesSection>
  );
};

export default AboutPage;
