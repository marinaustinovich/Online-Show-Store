import { classname } from 'utils';
import React from 'react';

import './preloader.scss';

const cn = classname('preloader');

export const Preloader = () => (
    <div className={cn('')}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
);
