import React from "react";
import { Wrapper } from "components/common";
import { FooterNavigation } from "./footer-navigation";
import { FooterContacts } from "./footer-contacts";
import { FooterPaymentCopyright } from "./footer-payment-copyright";
import { classname } from "utils";

import "./footer.scss";

const cn = classname("footer");

export const Footer = () => (
  <footer className={cn("", ["container", "bg-light"])}>
    <Wrapper>
      <FooterNavigation />
      <FooterPaymentCopyright />
      <FooterContacts />
    </Wrapper>
  </footer>
);
