import React, { ReactNode } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { classname } from 'utils';
type Props = {
    children: ReactNode;
    className?: string;
    to: string;
    realTo?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const cn = classname('nav-link');

export const Link = ({ children, className, to, realTo, ...props }: Props) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (realTo) {
            event.preventDefault();
            navigate(realTo);
        }
    };

    return (
        <RouterLink to={to} onClick={handleClick} {...props} className={cn('', [className])}>
            {children}
        </RouterLink>
    );
};
