import { classname } from 'utils';
import { Input, Form } from 'components';
import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { searchProductSelector } from 'store/products';
import { productsActions } from 'store/products/slice';

type CatalogSearchFormProps = {
    onSearchSubmit: () => void;
};

const cn = classname('catalog');

export const CatalogSearchForm = ({ onSearchSubmit }: CatalogSearchFormProps) => {
    const { t } = useTranslation('global');
    const dispatch = useAppDispatch();
    const searchProduct = useAppSelector(searchProductSelector);

    const [searchText, setSearchText] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchText(searchProduct ?? '');
    }, [searchProduct]);

    const handleKeyPress = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                onSearchSubmit();
                dispatch(productsActions.setSearchProduct(searchText));
            }
        },
        [onSearchSubmit, dispatch, searchText],
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearchText = e.target.value;
        setSearchText(newSearchText);

        const newSearchParams = new URLSearchParams(searchParams);
        if (newSearchText) {
            newSearchParams.set('q', newSearchText);
        } else {
            newSearchParams.delete('q');
        }
        setSearchParams(newSearchParams);
    };

    return (
        <Form className={cn('search-form')} onSubmit={onSearchSubmit}>
            <Input placeholder={t('main.catalog.search-form-placeholder')} value={searchText} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        </Form>
    );
};
