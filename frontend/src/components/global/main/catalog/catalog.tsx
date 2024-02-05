import { RequestStatus, classname } from 'utils';
import { Card, Preloader, Row, Title, LoadMoreButton, CatalogCategories, ErrorBlock } from 'components';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'store';
import { activeCategoryIdSelector, fetchItemsAction, fetchedItemsSelector, itemsStatusSelector, searchProductSelector } from 'store/products';
import { ItemsFilters } from 'api';
import { CategoryIdEnum } from 'enums/category-id-enum';
import { productsActions } from 'store/products/slice';
import { useCategoryIdFromUrl } from 'hooks';
import { CatalogSearchForm } from './catalog-search-form';

import './catalog.scss';

type CatalogProps = {
    isShowSearchForm?: boolean;
};

const ITEMS_OFFSET_DEFAULT = 6;

const cn = classname('catalog');

export const Catalog = ({ isShowSearchForm = false }: CatalogProps) => {
    const { t } = useTranslation('global');
    const dispatch = useAppDispatch();

    const [offset, setOffset] = useState<number>(0);
    const [prevItemsLength, setPrevItemsLength] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const products = useAppSelector(fetchedItemsSelector);
    const productsStatus = useAppSelector(itemsStatusSelector);
    const categoryId = useAppSelector(activeCategoryIdSelector);
    const searchProduct = useAppSelector(searchProductSelector);

    const { isParamsSet } = useCategoryIdFromUrl();

    const params = useMemo(() => {
        const params: ItemsFilters = { offset };
        if (categoryId && categoryId !== CategoryIdEnum.ALL) {
            params.categoryId = categoryId;
        }

        if (searchProduct) {
            params.q = searchProduct;
        }

        return params;
    }, [categoryId, offset, searchProduct]);

    useEffect(() => {
        if (isParamsSet) {
            if (offset === 0 && categoryId !== null && searchProduct !== null) {
                dispatch(productsActions.clearItems());
            }

            if (categoryId !== null || searchProduct !== null) {
                dispatch(fetchItemsAction(params)).then(() => {
                    setIsLoadingMore(false);
                });
            }
        }
    }, [isParamsSet, dispatch, offset, categoryId, searchProduct, params]);

    const handleSearchSubmit = useCallback(() => {
        setOffset(0);
        setPrevItemsLength(0);
    }, []);

    const handleLoadMore = useCallback(() => {
        setOffset(prevOffset => prevOffset + ITEMS_OFFSET_DEFAULT);
        setIsLoadingMore(true);

        if (products.length > prevItemsLength) {
            setPrevItemsLength(products.length);
        }
    }, [products.length, prevItemsLength]);

    const handleCategoryChange = useCallback(() => {
        setOffset(0);
        setPrevItemsLength(0);
    }, []);

    const showPreloader = useMemo(() => productsStatus === RequestStatus.PROCESSING, [productsStatus]);
    const showEmptyBlock = useMemo(() => productsStatus === RequestStatus.SUCCESS && !products.length, [products.length, productsStatus]);

    const showLoadMoreBtn = useMemo(
        () => (products.length !== 0 && products.length % ITEMS_OFFSET_DEFAULT === 0) || isLoadingMore,
        [products.length, isLoadingMore],
    );

    const showErrorBlock = useMemo(() => productsStatus === RequestStatus.ERROR, [productsStatus]);

    return (
        <section className={cn('')}>
            <Title text={t('main.catalog.title')} />
            {showErrorBlock ? (
                <ErrorBlock onReload={handleLoadMore} />
            ) : (
                <>
                    {isShowSearchForm && <CatalogSearchForm onSearchSubmit={handleSearchSubmit} />}
                    <CatalogCategories onCategoryChange={handleCategoryChange} />

                    <>
                        <Row>
                            {products?.map(product => <Card card={product} key={product.id} />)}

                            {showEmptyBlock && <div className={cn('empty-block')}>{t('main.catalog.empty-block')}</div>}
                        </Row>
                        {showPreloader && <Preloader />}
                        {showLoadMoreBtn && !showPreloader && <LoadMoreButton onClick={handleLoadMore} isDisabled={showPreloader} />}
                    </>
                </>
            )}
        </section>
    );
};
