import React from "react";

import { classname } from "utils";

type ProductImageProps = {
  url: string[];
  alt: string;
};

const cn = classname("img-fluid");

export const ProductImage = ({ url, alt }: ProductImageProps) => (
  <div className="col-5">
    <img src={url[0]} className={cn("")} alt={alt} />
  </div>
);
