import React, { ChangeEvent } from "react";

import { classname } from "utils";
import { Input } from "../input";

import "./form-group.scss";

type FormGroupProps = {
  placeholder?: string;
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const cn = classname("form-group");

export const FormGroup = ({ label, id, ...props }: FormGroupProps) => {
  return (
    <div className={cn()}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...props} />
    </div>
  );
};
