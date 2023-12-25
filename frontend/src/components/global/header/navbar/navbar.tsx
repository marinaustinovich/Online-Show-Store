import { classname } from "utils";
import { Link } from "components";
import { NavbarCollapse } from "./navbar-collapse";
import { ControlsPics } from "./controls-pics";


const cn = classname("navbar");

export const Navbar = () => {
  return (
    <nav className={cn("", [cn("expand-sm"), cn("light"), "bg-light"])}>
      <Link className={cn("brand")} to="/">
        <img src="./img/header-logo.png" alt="Bosa Noga" />
      </Link>
      <div className={cn("collapse", ["collapse"])} id="navbarMain">
        <NavbarCollapse />
        <ControlsPics />
      </div>
    </nav>
  );
};

export default Navbar;
