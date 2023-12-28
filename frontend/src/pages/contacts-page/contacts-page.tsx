import { EmailLink, PhoneLink, Title, TopSalesSection } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { classname } from "utils";

const cn = classname("contacts-page");

const ContactsPage = () => {
  const { t } = useTranslation("global");

  return (
    <TopSalesSection className={cn()}>
      <Title text={t("contacts.title")} />
      <p>
        {t("contacts.address-label")} {t("contacts.address")}
      </p>
      <h5 className="text-center">{t("contacts.contacts-details-label")}</h5>
      <p>
        <PhoneLink
          phone={t("contacts.phone")}
          label={t("contacts.phone-label")}
        />
        {t("contacts.working-hours")}
      </p>
      <p>
        <EmailLink
          email={t("contacts.email")}
          label={t("contacts.email-label")}
        />
      </p>
    </TopSalesSection>
  );
};

export default ContactsPage;
