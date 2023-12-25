import React from "react";

import { classname } from "utils";

import "./footer.scss";

const cn = classname("footer");

export const Footer = () => {
  return <footer className={cn()}>footer</footer>;
};
