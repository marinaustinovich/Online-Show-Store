import React from "react";

import { classname } from "utils";

import "./input.scss";

type InputProps = {
  placeholder?: string;
};

const cn = classname("form-control");

export const Input = ({ placeholder }: InputProps) => (
  <input className={cn()} placeholder={placeholder} />
);
