import { classname } from 'utils';
import { Input, Form } from 'components';
import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import './header-controls-search-form.scss';

type HeaderControlsSearchFormProps = {
    isShow: boolean;
    searchText: string;
    onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchFormSubmit: () => void;
};

const cn = classname('header-controls');

export const HeaderControlsSearchForm = ({ isShow, searchText, onSearchFormSubmit, onSearchInputChange }: HeaderControlsSearchFormProps) => {
    const { t } = useTranslation('global');

    return (
        <Form data-id='search-form' className={cn('search-form', [!isShow ? 'invisible' : ''])} onSubmit={onSearchFormSubmit}>
            <Input placeholder={t('main.catalog.search-form-placeholder')} value={searchText} onChange={onSearchInputChange} />
        </Form>
    );
};
