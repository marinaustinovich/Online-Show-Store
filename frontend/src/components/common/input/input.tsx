import React, { ChangeEvent, KeyboardEvent } from 'react';

import { classname } from 'utils';

import './input.scss';

type InputProps = {
    placeholder?: string;
    value: string;
    id?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const cn = classname('form-control');

export const Input = ({ ...props }: InputProps) => <input className={cn()} {...props} />;
