import React, { ChangeEvent, useEffect, useState } from 'react';

import { FieldValidator, classname } from 'utils';
import { Input } from '../input';

import './form-group.scss';

type FormGroupProps = {
    placeholder?: string;
    label: string;
    id: string;
    value: string;
    validate?: FieldValidator;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const cn = classname('form-group');

export const FormGroup = ({ label, id, validate, value, ...props }: FormGroupProps) => {
    const [error, setError] = useState<string | undefined | null>('');

    useEffect(() => {
        if (validate) {
            setError(validate(value));
        }
    }, [value, validate]);

    return (
        <div className={cn()}>
            <label htmlFor={id}>{label}</label>
            <Input id={id} value={value} {...props} />
            <span className={cn('error')}>{error}</span>
        </div>
    );
};
