import { classname } from "utils";
import { Link } from "components";
import { NavbarCollapse } from "./navbar-collapse";
import { ControlsPics } from "./controls-pics";
import { HeaderControlsSearchForm } from "./header-search-form";
import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const cn = classname("navbar");

export const Navbar = () => {
  const navigate = useNavigate();
  const [isShowHeaderControlsSearchForm, setIsHeaderControlsSearchForm] =
    useState(false);
  const [searchText, setSearchText] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const handleSearchExpanderClick = useCallback(() => {
    if (clickCount === 1 && searchText.trim() !== "") {
      setClickCount(0);
      setSearchText("");
      setIsHeaderControlsSearchForm(false);
      navigate(`/catalog?q=${searchText}`);
    } else {
      setIsHeaderControlsSearchForm((prevState) => !prevState);
      setClickCount(1);
    }
  }, [clickCount, navigate, searchText]);

  const handleSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  return (
    <nav className={cn("", [cn("expand-sm"), cn("light"), "bg-light"])}>
      <Link className={cn("brand")} to="/">
        <img src="/img/header-logo.png" alt="Bosa Noga" />
      </Link>
      <div className={cn("collapse", ["collapse"])} id="navbarMain">
        <NavbarCollapse />
        <ControlsPics onSearchExpanderClick={handleSearchExpanderClick} />
        <HeaderControlsSearchForm
          isShow={isShowHeaderControlsSearchForm}
          searchText={searchText}
          onSearchInputChange={handleSearchInputChange}
          onSearchFormSubmit={handleSearchExpanderClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
