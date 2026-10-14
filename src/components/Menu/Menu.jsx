import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { CONTACTS, NAV_ITEMS } from "../../config/siteConfig";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Star from "../Star/Star";
import "./Menu.css";

export default function Menu({ onClose }) {
  const { t } = useTranslation();
  const firstLink = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div id="menu" className="menu" role="dialog" aria-modal="true" aria-label={t("nav.menu")}>
      <div className="menu__top">
        <Link to="/" className="header__logo mono" onClick={onClose}>
          <Star />
          Pedro Bastos
        </Link>
        <button type="button" className="mono bracket" onClick={onClose}>
          {t("nav.close")}
        </button>
      </div>

      <nav className="menu__nav">
        {NAV_ITEMS.map(({ path, key }, i) => {
          const label = t(`nav.${key}`);
          return (
            <NavLink
              key={path}
              ref={i === 0 ? firstLink : undefined}
              to={path}
              className="menu__link"
              onClick={onClose}
            >
              {label}
              <span className="menu__strip mono" aria-hidden="true">
                <span>{Array(10).fill(`[ ${t("nav.view")} ${label} ]`).join("   ")}</span>
              </span>
            </NavLink>
          );
        })}
      </nav>

      <div className="menu__bottom">
        <LanguageSwitcher />
        <ul className="menu__socials">
          {CONTACTS.filter((c) => c.external).map(({ id, label, href }) => (
            <li key={id}>
              <a className="mono" href={href} target="_blank" rel="noreferrer">
                {label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
