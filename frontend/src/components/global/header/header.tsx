import { classname } from "utils";

import "./header.scss";
import { Navbar } from "./navbar";

const cn = classname("header");

export const Header = () => (
  <header className={cn()}>
    <Navbar />
  </header>
);

export default Header;
