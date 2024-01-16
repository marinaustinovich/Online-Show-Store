import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Preloader, Product } from "components";
import { useAppDispatch, useAppSelector } from "store";
import { fetchItemAction, fetchedItemSelector } from "store/products";

import "./product-page.scss";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector(fetchedItemSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemAction(id));
    }
  }, [id, dispatch]);

  return !product ? (
    <div className="preloader-wrapper">
      <Preloader />
    </div>
  ) : (
    <Product product={product} />
  );
};

export default ProductPage;
