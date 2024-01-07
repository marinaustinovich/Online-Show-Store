import { useAppDispatch } from "store";
import { productsActions } from "store/products/slice";
import { CategoryIdEnum } from "enums";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEffectOnce } from "./use-effect-once";

export const useCategoryIdFromUrl = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    const params = new URLSearchParams(location.search);
    const categoryIdParam = params.get("categoryId");

    if (categoryIdParam) {
      if (categoryIdParam === CategoryIdEnum.ALL) {
     
        dispatch(productsActions.setActiveCategoryId(CategoryIdEnum.ALL));
      } else {
       
        const parsedCategoryId = parseInt(categoryIdParam, 10);
        if (!isNaN(parsedCategoryId)) {
          dispatch(productsActions.setActiveCategoryId(parsedCategoryId));
        }
      }
    } else {
      dispatch(productsActions.setActiveCategoryId(CategoryIdEnum.ALL));
    }
  }, [location.search, dispatch]);
};
