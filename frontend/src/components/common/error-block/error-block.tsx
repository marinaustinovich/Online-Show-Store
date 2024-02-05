import React from 'react';

import { classname } from 'utils';
import { Button } from '../button';
import { useTranslation } from 'react-i18next';

import './error-block.scss';

type Props = {
    onReload: () => void;
};

const cn = classname('error-block');

export const ErrorBlock = ({ onReload }: Props) => {
    const { t } = useTranslation('common');
    const locale = 'commons.error-block';

    return (
        <div className={cn()}>
            <h2>{t(`${locale}.title`)}</h2>
            <h4>{t(`${locale}.text`)}</h4>
            <div className='text-center'>
                <Button onClick={onReload} className='btn-outline-primary'>
                    {t(`${locale}.reload-btn`)}
                </Button>
            </div>
        </div>
    );
};
