import { classname } from "utils";
import { Column } from "components/common";
import React from "react";
import { useTranslation } from "react-i18next";

const cn = classname("footer-pay");
const cnSystems = classname("footer-pay-systems");

export const FooterPaymentCopyright = () => {
  const { t } = useTranslation("global");

  return (
    <Column>
      <section>
        <h5>{t("footer.payment-copyright.title")}</h5>
        <div className={cn()}>
          <div className={cnSystems("", [cnSystems("paypal")])}></div>
          <div className={cnSystems("", [cnSystems("master-card")])}></div>
          <div className={cnSystems("", [cnSystems("visa")])}></div>
          <div className={cnSystems("", [cnSystems("yandex")])}></div>
          <div className={cnSystems("", [cnSystems("webmoney")])}></div>
          <div className={cnSystems("", [cnSystems("qiwi")])}></div>
        </div>
      </section>
      <section>
        <div className="footer-copyright">
          {t("footer.payment-copyright.copyright")}
          <br />
          {t("footer.payment-copyright.delivery")}
        </div>
      </section>
    </Column>
  );
};
