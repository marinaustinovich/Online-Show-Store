import { classname } from "utils";

import "./header.scss";
import { Navbar } from "./navbar";

import { Column, Wrapper } from "components/common";

const cn = classname("container");

export const Header = () => (
  <header className={cn()}>
    <Wrapper>
      <Column>
        <Navbar />
      </Column>
    </Wrapper>
  </header>
);

export default Header;
