import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { sortedProjects } from "../../data/projects";
import { formatMonth, useLocale, useLocalized } from "../../i18n/useLocalized";
import NotFound from "../NotFound/NotFound";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const l = useLocalized();
  const locale = useLocale();

  const projects = sortedProjects();
  const project = projects.find((p) => p.id === id);
  if (!project) return <NotFound />;

  const others = projects.filter((p) => p.id !== id);
  const more = t("project.more");

  return (
    <Page title={l(project.name)}>
      <div className="hud">
        <div className="hud__info">
          <Link to="/projetos" className="mono bracket">
            {t("common.back")}
          </Link>

          <div className="hud__head">
            <h1 className="hud__title">{l(project.name)}</h1>
            <p className="hud__subtitle">{l(project.tagline)}</p>
            <div className="hud__pills">
              <span className="pill pill--solid">{project.tag}</span>
              <span className="pill">{formatMonth(project.start, locale)}</span>
            </div>
          </div>

          <div className="hud__block">
            <h2 className="hud__label">{t("project.about")}</h2>
            <p className="hud__text">{l(project.summary)}</p>
          </div>

          <div className="hud__block">
            <h2 className="hud__label">{t("project.tech")}</h2>
            <p className="hud__text">{project.tech.join(" · ")}</p>
          </div>

          <div className="hud__block">
            <h2 className="hud__label">{t("project.team")}</h2>
            <p className="hud__text">{project.team}</p>
          </div>

          <a className="mono bracket" href={project.repo} target="_blank" rel="noreferrer">
            {t("common.github")} ↗
          </a>
        </div>

        <div className="hud__media">
          {project.media.map((item) => (
            <img key={item.src} src={item.src} alt={l(item.alt)} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="more" aria-label={more}>
        <div className="more__track" aria-hidden="true">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i}>
              {more.split(" ")[0]} <em>{more.split(" ").slice(1).join(" ")}</em>
            </span>
          ))}
        </div>
      </div>

      <div className="cards">
        {others.map((p) => (
          <ProjectCard
            key={p.id}
            to={`/projetos/${p.id}`}
            image={p.media[0].src}
            alt={l(p.media[0].alt)}
            tag={p.tag}
            title={l(p.name)}
          />
        ))}
      </div>
    </Page>
  );
}
