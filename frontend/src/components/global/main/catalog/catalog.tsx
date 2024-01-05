import { RequestStatus, classname } from "utils";
import {
  Card,
  Preloader,
  Row,
  Title,
  LoadMoreButton,
  CatalogCategories,
  Input,
  Form,
} from "components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store";
import {
  fetchItemsAction,
  fetchedItemsSelector,
  itemsStatusSelector,
} from "store/products";
import { ItemsFilters } from "api";
import { CategoryIdEnum } from "enums/category-id-enum";
import { productsActions } from "store/products/slice";

import "./catalog.scss";

type CatalogProps = {
  isShowSearchForm?: boolean;
};

const ITEMS_OFFSET_DEFAULT = 6;

const cn = classname("catalog");

export const Catalog = ({ isShowSearchForm = false }: CatalogProps) => {
  const { t } = useTranslation("global");
  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState<number>(0);
  const [prevItemsLength, setPrevItemsLength] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [catalogId, setCatalogId] = useState(CategoryIdEnum.ALL);

  const products = useAppSelector(fetchedItemsSelector);
  const productsStatus = useAppSelector(itemsStatusSelector);

  useEffect(() => {
    const params: ItemsFilters = { offset };

    if (catalogId !== CategoryIdEnum.ALL) {
      params.categoryId = catalogId;
    }

    if (offset === 0) {
      dispatch(productsActions.clearItems());
    }

    dispatch(fetchItemsAction(params)).then(() => {
      setIsLoadingMore(false);
    });
  }, [dispatch, offset, catalogId]);

  const handleLoadMore = useCallback(() => {
    setOffset((prevOffset) => prevOffset + ITEMS_OFFSET_DEFAULT);
    setIsLoadingMore(true);
    if (products.length > prevItemsLength) {
      setPrevItemsLength(products.length);
    }
  }, [products.length, prevItemsLength]);

  const handleCategoryChange = useCallback(
    (id: CategoryIdEnum) => {
      dispatch(productsActions.clearItems());
      setCatalogId(id);
      setOffset(0);
      setPrevItemsLength(0);
    },
    [dispatch]
  );

  const showPreloader = useMemo(
    () => products.length === 0 || productsStatus === RequestStatus.NONE,
    [products.length, productsStatus]
  );

  const hideLoadMoreBtn = useMemo(
    () =>
      prevItemsLength === products.length &&
      products.length % ITEMS_OFFSET_DEFAULT !== 0,
    [products.length, prevItemsLength]
  );

  return (
    <section className={cn("")}>
      <Title text={t("main.catalog.title")} />
      {isShowSearchForm && (
        <Form className={cn("search-form")}>
          <Input placeholder={t("main.catalog.search-form-placeholder")} />
        </Form>
      )}
      <CatalogCategories onCategoryChange={handleCategoryChange} />
      {showPreloader && <Preloader />}
      <>
        <Row>
          {products?.map((product) => <Card card={product} key={product.id} />)}
        </Row>
        {!showPreloader && !hideLoadMoreBtn && (
          <LoadMoreButton onClick={handleLoadMore} isLoading={isLoadingMore} />
        )}
      </>
    </section>
  );
};
