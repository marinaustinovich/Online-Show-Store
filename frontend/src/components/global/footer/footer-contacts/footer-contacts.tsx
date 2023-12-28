import React from "react";

import { classname } from "utils";

import { Column, EmailLink, PhoneLink } from "components/common";
import { useTranslation } from "react-i18next";

const cn = classname("footer-contacts");
const cnSocialLinks = classname("footer-social");

export const SocialLinks = () => (
  <div className={cnSocialLinks("links")}>
    <div
      className={cnSocialLinks("link", [cnSocialLinks("link-twitter")])}
    ></div>
    <div className={cnSocialLinks("link", [cnSocialLinks("link-vk")])}></div>
  </div>
);

export const FooterContacts = () => {
  const { t } = useTranslation("global");

  return (
    <Column className="text-right">
      <section className={cn("")}>
        <h5>{t("footer.contacts.title")}</h5>
        <PhoneLink phone={t("footer.contacts.phone")} className={cn("phone")} />
        <span className={cn("working-hours")}>
          {t("footer.contacts.working-hours")}
        </span>
        <EmailLink email={t("footer.contacts.email")} className={cn("email")} />
        <SocialLinks />
      </section>
    </Column>
  );
};
