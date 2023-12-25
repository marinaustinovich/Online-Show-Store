import { classname } from "utils";

import "./header.scss";
import { Navbar } from "./navbar";
import Wrapper from "components/common/wrapper/wrapper";

const cn = classname("container");

export const Header = () => (
  <header className={cn()}>
    <Wrapper>
      <Navbar />
    </Wrapper>
  </header>
);

export default Header;
