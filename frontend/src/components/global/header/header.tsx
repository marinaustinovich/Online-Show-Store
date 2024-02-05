import { classname } from 'utils';
import { Navbar } from './navbar';

import { Column, Wrapper } from 'components/common';

import './header.scss';

const cn = classname('container');

export const Header = () => (
    <header className={cn()}>
        <Wrapper>
            <Column>
                <Navbar />
            </Column>
        </Wrapper>
    </header>
);
