import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Page({ title, className = "", children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = title ? `${title} · Pedro Felipe Bastos` : "Pedro Felipe Bastos · Portfólio";
  }, [title]);

  return <main className={`page ${className}`}>{children}</main>;
}
