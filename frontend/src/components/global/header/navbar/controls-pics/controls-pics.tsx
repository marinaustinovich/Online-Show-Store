import React from "react";

import { classname } from "utils";

type ControlsPicsProps = {
  onSearchExpanderClick: () => void;
};

const cn = classname("header-controls");

export const ControlsPics = ({ onSearchExpanderClick }: ControlsPicsProps) => {
  return (
    <div className={cn("pics")}>
      <div
        data-id="search-expander"
        className={cn("pic", [cn("search")])}
        onClick={onSearchExpanderClick}
      ></div>

      <div className={cn("pic", [cn("cart")])}>
        <div className={cn("cart-full")}>1</div>
        <div className={cn("cart-menu")}></div>
      </div>
    </div>
  );
};

export default ControlsPics;
