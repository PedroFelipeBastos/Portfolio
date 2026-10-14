import { useTranslation } from "react-i18next";
import { FaGraduationCap } from "react-icons/fa";
import photo from "../../assets/pedro.webp";
import Page from "../../components/Page/Page";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SKILLS from "../../data/skills";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Page>
      <section className="page-hero">
        <p className="mono status">{t("home.available")}</p>
        <h1 className="page-title">
          Pedro Felipe
          <br />
          Bastos
        </h1>
      </section>

      <div className="cards">
        <ProjectCard
          to="/sobre"
          image={photo}
          alt="Pedro Felipe Bastos"
          position="50% 65%"
          tag={t("home.aboutTag")}
          title={t("home.about")}
        />
        <ProjectCard
          to="/projetos"
          image="/projects/royal-flush/tela_inicial.gif"
          tag={t("home.projectsTag")}
          title={t("nav.projects")}
        />
        <ProjectCard to="/experiencias" tag={t("home.experienceTag")} title={t("nav.experience")}>
          <FaGraduationCap />
        </ProjectCard>
        <ProjectCard to="/tecnologias" tag={t("home.stackTag")} title={t("nav.stack")}>
          {SKILLS.slice(0, 6).map(({ name, icon: Icon }) => (
            <Icon key={name} />
          ))}
        </ProjectCard>
      </div>
    </Page>
  );
}
