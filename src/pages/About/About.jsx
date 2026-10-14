import { useTranslation } from "react-i18next";
import photo from "../../assets/pedro.webp";
import Page from "../../components/Page/Page";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <Page title={t("about.title")}>
      <section className="page-hero">
        <p className="mono status">{t("about.label")}</p>
        <h1 className="page-title">{t("about.title")}</h1>
      </section>

      <div className="about">
        <img src={photo} alt="Pedro Felipe Bastos" width="900" height="1600" />
        <p className="about__text">{t("about.text")}</p>
      </div>
    </Page>
  );
}
