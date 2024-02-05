import React, { ChangeEvent } from 'react';

import { classname } from 'utils';

type FormGroupProps = {
    label?: string;
    id: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const cn = classname('form-check');

export const Checkbox = ({ label, id, ...props }: FormGroupProps) => {
    return (
        <div className={cn('', ['form-group'])}>
            <input className={cn('input')} id={id} type='checkbox' {...props} />
            {label && (
                <label className={cn('label')} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};
