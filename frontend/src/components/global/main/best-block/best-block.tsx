import {
  fetchTopSalesAction,
  fetchedTopSalesSelector,
  topSalesStatusSelector,
} from "store/products";
import { Card, Preloader, Row, Title, TopSalesSection } from "components";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store";
import { RequestStatus } from "utils";

export const BestBlock = () => {
  const { t } = useTranslation("global");
  const dispatch = useAppDispatch();

  const topSalesProducts = useAppSelector(fetchedTopSalesSelector);
  const topSalesStatus = useAppSelector(topSalesStatusSelector);

  useEffect(() => {
    dispatch(fetchTopSalesAction());
  }, [dispatch]);

  const showComponent = useMemo(
    () =>
      topSalesStatus === RequestStatus.PROCESSING ||
      topSalesProducts.length > 0,
    [topSalesProducts.length, topSalesStatus]
  );

  return showComponent ? (
    <TopSalesSection>
      <Title text={t("main.best.title")} />
      {topSalesStatus === RequestStatus.PROCESSING && <Preloader />}
      <Row>
        {topSalesProducts?.map((product) => (
          <Card card={product} key={product.id} />
        ))}
      </Row>
    </TopSalesSection>
  ) : null;
};
