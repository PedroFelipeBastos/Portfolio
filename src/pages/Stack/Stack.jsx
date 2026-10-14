import { useTranslation } from "react-i18next";
import GitHubDashboard from "../../components/GitHub/GitHubDashboard";
import Page from "../../components/Page/Page";
import SKILLS from "../../data/skills";
import "./Stack.css";

export default function Stack() {
  const { t } = useTranslation();

  return (
    <Page title={t("stack.title")}>
      <section className="page-hero">
        <p className="mono status">{t("stack.label")}</p>
        <h1 className="page-title">{t("stack.title")}</h1>
      </section>

      <ul className="stack">
        {SKILLS.map(({ name, group, icon: Icon }) => (
          <li key={name} className="stack__card">
            <span className="stack__tag mono">{t(`stack.groups.${group}`)}</span>
            <Icon className="stack__icon" aria-hidden="true" />
            <span className="stack__name">{name}</span>
          </li>
        ))}
      </ul>

      <section className="page-hero">
        <p className="mono status">{t("stack.live")}</p>
      </section>

      <section className="live">
        <h2 className="hud__label">{t("stack.github")}</h2>
        <GitHubDashboard />
      </section>
    </Page>
  );
}
