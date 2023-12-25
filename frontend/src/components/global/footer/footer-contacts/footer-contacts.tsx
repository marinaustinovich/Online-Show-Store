import React from "react";

import { classname } from "utils";

import { Column } from "components/common";
import { useTranslation } from "react-i18next";

const cn = classname("footer-contacts");
const cnSocialLinks = classname("footer-social");

export const SocialLinks = () => (
  <div className={cnSocialLinks("links")}>
    <div className={cnSocialLinks("link", [cnSocialLinks("link-twitter")])}></div>
    <div className={cnSocialLinks("link", [cnSocialLinks("link-vk")])}></div>
  </div>
);

export const FooterContacts = () => {
  const { t } = useTranslation("global");

  return (
    <Column className="text-right">
      <section className={cn("")}>
        <h5>{t("footer.contacts.title")}</h5>
        <a className={cn("phone")} href={`tel:{t('footer.contacts.phone')}`}>
        {t('footer.contacts.phone')}
        </a>
        <span className={cn("working-hours")}>{t('footer.contacts.working-hours')}</span>
        <a className={cn("email")} href={`mailto:${t('footer.contacts.email')}`}>
         {t('footer.contacts.email')}
        </a>
        <SocialLinks />
      </section>
    </Column>
  );
};
