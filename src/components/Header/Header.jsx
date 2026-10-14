import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import Star from "../Star/Star";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus();
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo mono">
          <Star />
          Pedro Bastos
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="mono"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(true)}
        >
          {t("nav.menu")}
        </button>
      </header>

      {open && <Menu onClose={close} />}
    </>
  );
}
