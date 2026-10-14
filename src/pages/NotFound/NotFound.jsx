import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Page title={t("notFound.text")}>
      <section className="page-hero">
        <p className="mono status">{t("notFound.text")}</p>
        <h1 className="page-title">{t("notFound.title")}</h1>
        <Link to="/" className="mono bracket">
          {t("notFound.back")}
        </Link>
      </section>
    </Page>
  );
}
