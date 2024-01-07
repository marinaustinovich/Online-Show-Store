import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Preloader, Product } from "components";
import { useAppDispatch, useAppSelector } from "store";
import { fetchItemAction, fetchedItemSelector } from "store/products";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector(fetchedItemSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemAction(id));
    }
  }, [id, dispatch]);

  return !product ? <Preloader /> : <Product product={product} />;
};

export default ProductPage;
