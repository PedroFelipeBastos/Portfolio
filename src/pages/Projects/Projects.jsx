import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { sortedProjects } from "../../data/projects";
import { formatMonth, useLocale, useLocalized } from "../../i18n/useLocalized";
import "./Projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const l = useLocalized();
  const locale = useLocale();
  const [params, setParams] = useSearchParams();

  const projects = sortedProjects();
  const tags = [...new Set(projects.map((p) => p.tag))];
  const active = params.get("tag");
  const visible = active ? projects.filter((p) => p.tag === active) : projects;

  const period = (p) => {
    const start = formatMonth(p.start, locale);
    if (p.end === p.start) return start;
    return `${start} — ${p.end ? formatMonth(p.end, locale) : t("common.present").toUpperCase()}`;
  };

  return (
    <Page title={t("projects.title")}>
      <section className="page-hero">
        <p className="mono status">{t("projects.label")}</p>
        <h1 className="page-title">{t("projects.title")}</h1>
      </section>

      <div className="filters">
        <button type="button" className={`pill ${!active ? "pill--solid" : ""}`} onClick={() => setParams({})}>
          {t("projects.all")}
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`pill ${active === tag ? "pill--solid" : ""}`}
            onClick={() => setParams({ tag })}
          >
            {tag}
          </button>
        ))}
      </div>


      <ol className="timeline">
        {visible.map((project) => (
          <li key={project.id} className="timeline__item">
            <div className="timeline__info">
              <p className="mono">{period(project)}</p>
              <p className="hud__text">{l(project.summary)}</p>
              <div className="hud__pills">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
              <Link to={`/projetos/${project.id}`} className="mono bracket">
                {t("projects.details")}
              </Link>
            </div>
            <ProjectCard
              to={`/projetos/${project.id}`}
              image={project.media[0].src}
              alt={l(project.media[0].alt)}
              tag={project.tag}
              title={l(project.name)}
            />
          </li>
        ))}
      </ol>
    </Page>
  );
}
