import React, { ReactNode } from "react";

import { classname } from "utils";

import "./button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    badgeText?: string;
    active?: boolean;
  };

const cn = classname("btn");

export const Button = (props: ButtonProps) => {
  const { children, className, active, badgeText, ...rest } = props;

  return (
    <button type="button" {...rest} className={cn("", [className])}>
      {children}
      {badgeText && <div className={cn("badge")}>{badgeText}</div>}
    </button>
  );
};

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    className?: string;
    badgeText?: string;
    active?: boolean;
    href?: string;
  };

export const ButtonLink = (props: ButtonLinkProps) => {
  const { children, className, active, badgeText, href, ...rest } = props;

  return (
    <a
      href={href}
      className={cn("", [cn("outline-primary")])}
      {...rest}
    >
      {children}
      {badgeText}
    </a>
  );
};
