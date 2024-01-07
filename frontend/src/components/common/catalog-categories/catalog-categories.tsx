import { classname } from "utils";
import { UnOrderedList } from "components";
import React, { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import "./catalog-categories.scss";
import { CategoryIdEnum } from "enums/category-id-enum";
import { useAppDispatch, useAppSelector } from "store";
import {
  activeCategoryIdSelector,
  fetchCategoriesAction,
  fetchedCategoriesSelector,
} from "store/products";

import { productsActions } from "store/products/slice";

type Props = {
  onCategoryChange: (id: CategoryIdEnum) => void;
};

const cn = classname("catalog-categories");
const cnNavLink = classname("nav-link");

export const CatalogCategories = ({ onCategoryChange }: Props) => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const activeCategory = useAppSelector(activeCategoryIdSelector);

  const categories = useAppSelector(fetchedCategoriesSelector);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  const handleCategoryClick = useCallback(
    (categoryId: CategoryIdEnum) =>
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (activeCategory === categoryId) {
          return;
        }

        dispatch(productsActions.setActiveCategoryId(categoryId));
        onCategoryChange(categoryId);
      },
    [activeCategory, dispatch, onCategoryChange]
  );

  const categoriesList = useMemo(() => {
    if (categories.length === 0) {
      return null;
    }

    const categoriesArray = Object.values(categories);
    const allCategoryLink = (
      <a
        href="#all"
        className={cnNavLink("", [
          activeCategory === CategoryIdEnum.ALL ? "active" : "",
        ])}
        onClick={handleCategoryClick(CategoryIdEnum.ALL)}
      >
        {t("commons.catalog-categories.all")}
      </a>
    );

    const categoryLinks = categoriesArray.map((category) => (
      <a
        key={category.id}
        href={`#${category.id}`}
        className={cnNavLink("", [
          activeCategory === category.id ? "active" : "",
        ])}
        onClick={handleCategoryClick(category.id)}
      >
        {category.title}
      </a>
    ));

    return [allCategoryLink, ...categoryLinks];
  }, [categories, activeCategory, handleCategoryClick, t]);

  return <UnOrderedList className={cn()} list={categoriesList} />;
};