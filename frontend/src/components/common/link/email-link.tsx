import React from 'react';

import { classname } from 'utils';

type Props = {
    email: string;
    className?: string;
    label?: string;
};

const cn = classname('email-link');

export const EmailLink = ({ email, className, label }: Props) => (
    <>
        {label}
        <a className={cn('', [className])} href={`mailto:${email}`}>
            {email}
        </a>
    </>
);
