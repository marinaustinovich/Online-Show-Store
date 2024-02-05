import React, { MouseEventHandler, ReactNode, useCallback } from 'react';

import { classname } from 'utils';

import './button.scss';
import { useNavigate } from 'react-router-dom';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    badgeText?: string;
    active?: boolean;
    type?: 'button' | 'submit';
};

const cn = classname('btn');

export const Button = (props: ButtonProps) => {
    const { children, className, active, badgeText, type = 'button', ...rest } = props;

    return (
        <button type={type} {...rest} className={cn('', [className])}>
            {children}
            {badgeText && <div className={cn('badge')}>{badgeText}</div>}
        </button>
    );
};

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    className?: string;
    badgeText?: string;
    active?: boolean;
    href?: string;
};

export const ButtonLink = (props: ButtonLinkProps) => {
    const { children, className, active, badgeText, href, ...rest } = props;
    const navigate = useNavigate();

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();

            if (href) {
                navigate(href);
            }
        },
        [navigate, href],
    );

    return (
        <a href={href} className={cn('', [cn('outline-primary')])} {...rest} onClick={handleClick}>
            {children}
            {badgeText}
        </a>
    );
};
