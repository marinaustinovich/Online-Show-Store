import { classname } from 'utils';
import { ReactNode } from 'react';

const cn = classname('col');

type Props = {
    children: ReactNode;
    className?: string;
};

export const Column = ({ children, className }: Props) => <div className={cn('', [className])}>{children}</div>;

export default Column;
