import React, { FormEvent, ReactNode, useCallback } from "react";

import { classname } from "utils";

import "./form.scss";

type FormProps = {
  className?: string;
  children: ReactNode;
  onSubmit?: () => void;
};

const cn = classname("form");

export const Form = ({ className, children, onSubmit, ...rest }: FormProps) => {
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      onSubmit?.();
    },
    [onSubmit]
  );
  return (
    <form
      className={cn("", [cn("inline"), className])}
      onSubmit={handleSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};
