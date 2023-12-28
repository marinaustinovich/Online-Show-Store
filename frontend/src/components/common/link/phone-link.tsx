import React from "react";

import { classname } from "utils";

type Props = {
  phone: string;
  className?: string;
  label?: string;
};

const cn = classname("phone-link");

export const PhoneLink = ({ phone, className, label }: Props) => (
  <>
    {label}
    <a className={cn("", [className])} href={`tel:${phone}`}>
      {phone}
    </a>
  </>
);
