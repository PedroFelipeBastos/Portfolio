import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import EXPERIENCES from "../../data/experiences";
import { formatMonth, useLocale, useLocalized } from "../../i18n/useLocalized";
import "./Experience.css";

export default function Experience() {
  const { t } = useTranslation();
  const l = useLocalized();
  const locale = useLocale();

  const period = ({ start, end }) => {
    const from = formatMonth(start, locale);
    const to = end ? formatMonth(end, locale) : t("common.present").toUpperCase();
    return from === to ? from : `${from} — ${to}`;
  };

  return (
    <Page title={t("experience.title")}>
      <section className="page-hero">
        <p className="mono status">{t("experience.label")}</p>
        <h1 className="page-title">{t("experience.title")}</h1>
      </section>

      {EXPERIENCES.map(({ group, items }) => (
        <section key={group} className="xp">
          <h2 className="hud__label">{t(`experience.${group}`)}</h2>
          {items.map((item) => (
            <article key={l(item.role)} className="xp__row">
              <p className="mono muted">{period(item)}</p>
              <div>
                <h3 className="xp__role">{l(item.role)}</h3>
                <p className="mono">{item.org}</p>
              </div>
              <div className="xp__side">
                <p className="hud__text">{l(item.description)}</p>
                {item.project && (
                  <Link to={`/projetos/${item.project}`} className="mono bracket">
                    {t("experience.seeProject")}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      ))}
    </Page>
  );
}
