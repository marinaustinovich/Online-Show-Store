import { useAppDispatch } from "store";
import { productsActions } from "store/products/slice";
import { CategoryIdEnum } from "enums";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useCategoryIdFromUrl = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
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
    }
  }, [location.search, dispatch]);
};
