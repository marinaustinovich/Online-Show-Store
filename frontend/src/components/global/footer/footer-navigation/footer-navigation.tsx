import { classname } from "utils";
import { Column, Link } from "components";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

type Route = {
  name: string;
  path: string;
};

const cn = classname("nav");

export const FooterNavigation = () => {
  const router = useLocation();
  const { pathname } = router;
  const { t } = useTranslation("global");

  const routes = useMemo(
    (): Route[] => [
      {
        name: t("footer.navigation.about-store-label"),
        path: "/about",
      },
      {
        name: t("footer.navigation.catalog-label"),
        path: "/catalog",
      },
      {
        name: t("footer.navigation.contacts-label"),
        path: "/contacts",
      },
    ],
    [t]
  );

  return (
    <Column>
      <section>
        <h5>{t("footer.navigation.title")}</h5>
        <ul className={cn("", ["flex-column"])}>
          {routes.map(({ name, path }) => (
            <li
              key={name}
              className={`nav-item ${pathname === path ? "active" : ""}`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Column>
  );
};

export default FooterNavigation;
