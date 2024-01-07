import { classname } from "utils";
import React, { useState } from "react";
import { Button } from "../button";

const MAX_QUANTITY = 100;

type QuantitySelectorProps = {
  label?: string;
  maxQuantity?: number;
  onQuantityChange: (newQuantity: number) => void;
};

const cn = classname("quantity-selector");

export const QuantitySelector = ({ label, maxQuantity = MAX_QUANTITY, onQuantityChange }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= maxQuantity) {
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
      } 
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); 
    }
  };

  return (
    <p className={cn()}>
      {label}
      <span className="btn-group btn-group-sm pl-2">
        <Button className="btn-secondary" onClick={decrementQuantity}>
          -
        </Button>
        <span className="btn btn-outline-primary">{quantity}</span>
        <Button className="btn-secondary" onClick={incrementQuantity}>
          +
        </Button>
      </span>
    </p>
  );
};
