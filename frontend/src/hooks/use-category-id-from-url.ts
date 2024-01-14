import { useAppDispatch } from "store";
import { productsActions } from "store/products/slice";
import { CategoryIdEnum } from "enums";
import { useLocation } from "react-router-dom";
import { useEffectOnce } from "./use-effect-once";
import { useState } from "react";

export const useCategoryIdFromUrl = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isParamsSet, setIsParamsSet] = useState(false);

  useEffectOnce(() => {
    const params = new URLSearchParams(location.search);
    const categoryIdParam = params.get("categoryId");
    const qParam = params.get("q");

    const dispatchPromises = [];

    if (qParam) {
      dispatchPromises.push(dispatch(productsActions.setSearchProduct(qParam)));
    }

    if (categoryIdParam) {
      if (categoryIdParam === CategoryIdEnum.ALL) {
        dispatchPromises.push(
          dispatch(productsActions.setActiveCategoryId(CategoryIdEnum.ALL))
        );
      } else {
        const parsedCategoryId = parseInt(categoryIdParam, 10);
        if (!isNaN(parsedCategoryId)) {
          dispatchPromises.push(
            dispatch(productsActions.setActiveCategoryId(parsedCategoryId))
          );
        }
      }
    } else {
      dispatchPromises.push(
        dispatch(productsActions.setActiveCategoryId(CategoryIdEnum.ALL))
      );
    }

    Promise.all(dispatchPromises).then(() => {
      setIsParamsSet(true);
    });
  }, [location.search, dispatch]);

  return { isParamsSet };
};
