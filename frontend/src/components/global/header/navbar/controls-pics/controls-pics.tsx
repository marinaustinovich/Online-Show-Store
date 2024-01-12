import { useAppSelector } from "store";
import { cartCountSelector } from "store/products";
import React from "react";
import { useNavigate } from "react-router-dom";

import { classname } from "utils";

type ControlsPicsProps = {
  onSearchExpanderClick: () => void;
};

const cn = classname("header-controls");

export const ControlsPics = ({ onSearchExpanderClick }: ControlsPicsProps) => {
  const navigate = useNavigate();
  const selectedProductsCount = useAppSelector(cartCountSelector);

  return (
    <div className={cn("pics")}>
      <div
        data-id="search-expander"
        className={cn("pic", [cn("search")])}
        onClick={onSearchExpanderClick}
      ></div>

      <div
        className={cn("pic", [cn("cart")])}
        onClick={() => navigate("/cart")}
      >
        {selectedProductsCount > 0 && (
          <div className={cn("cart-full")}>{selectedProductsCount}</div>
        )}
        <div className={cn("cart-menu")}></div>
      </div>
    </div>
  );
};
