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
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store";
import {
  activeCategoryIdSelector,
  fetchItemsAction,
  fetchedItemsSelector,
  itemsStatusSelector,
  searchProductSelector,
} from "store/products";
import { ItemsFilters } from "api";
import { CategoryIdEnum } from "enums/category-id-enum";
import { productsActions } from "store/products/slice";
import { useCategoryIdFromUrl } from "hooks";

import "./catalog.scss";

type CatalogProps = {
  isShowSearchForm?: boolean;
};

const ITEMS_OFFSET_DEFAULT = 6;

const cn = classname("catalog");

export const Catalog = ({ isShowSearchForm = false }: CatalogProps) => {
  const { t } = useTranslation("global");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [offset, setOffset] = useState<number>(0);
  const [prevItemsLength, setPrevItemsLength] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchText, setSearchText] = useState<string>("");

  const products = useAppSelector(fetchedItemsSelector);
  const productsStatus = useAppSelector(itemsStatusSelector);
  const categoryId = useAppSelector(activeCategoryIdSelector);
  const searchProduct = useAppSelector(searchProductSelector);

  useCategoryIdFromUrl();

  const params = useMemo(() => {
    const params: ItemsFilters = { offset, q: searchProduct ?? ''};
    if (categoryId && categoryId !== CategoryIdEnum.ALL) {
      params.categoryId = categoryId;
    }

    if (searchProduct) {
      setSearchText(searchProduct);
    }

    return params;
  }, [categoryId, offset, searchProduct]);

  useEffect(() => {
    if (offset === 0 && categoryId !== null && searchProduct !== null) {
      dispatch(productsActions.clearItems());
    }

    if (categoryId !== null && searchProduct !== null) {
      dispatch(fetchItemsAction(params)).then(() => {
        setIsLoadingMore(false);
      });
    }
  }, [dispatch, offset, categoryId, searchText, searchProduct, params]);

  const handleSearchSubmit = useCallback(() => {
    setOffset(0);
    setPrevItemsLength(0);
    dispatch(productsActions.setSearchProduct(searchText));
  }, [searchText, dispatch]);

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

      setOffset(0);
      setPrevItemsLength(0);

      navigate(`?categoryId=${id}&q=${searchProduct}`);
    },
    [dispatch, navigate, searchProduct]
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
        <Form className={cn("search-form")} onSubmit={handleSearchSubmit}>
          <Input
            placeholder={t("main.catalog.search-form-placeholder")}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setOffset(0);
              setPrevItemsLength(0);
            }}
          />
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
