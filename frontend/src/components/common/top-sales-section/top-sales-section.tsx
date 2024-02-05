import { classname } from 'utils';
import { ReactNode } from 'react';

import './top-sales-section.scss';

type Props = {
    children: ReactNode;
    className?: string;
};
const cn = classname('top-sales');

export const TopSalesSection = ({ children, className }: Props) => <section className={cn('', [className])}>{children}</section>;
