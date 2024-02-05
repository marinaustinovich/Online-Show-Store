import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const Wrapper = ({ children }: Props) => <div className='row'>{children}</div>;
