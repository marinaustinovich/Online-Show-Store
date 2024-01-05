import React, { ReactNode } from "react";

import { classname } from "utils";

import "./form.scss";

type FormProps = {
  className?: string;
  children: ReactNode;
};

const cn = classname("form");

export const Form = ({ className, children }: FormProps) => (
  <form className={cn("", [cn("inline"), className])}>{children}</form>
);
