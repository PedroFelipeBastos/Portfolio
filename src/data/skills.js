import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiBootstrap,
  SiC,
  SiChartdotjs,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiSpringboot,
  SiVite,
} from "react-icons/si";

const SKILLS = [
  { name: "JavaScript", group: "language", icon: SiJavascript },
  { name: "Java", group: "language", icon: FaJava },
  { name: "Python", group: "language", icon: SiPython },
  { name: "HTML", group: "language", icon: SiHtml5 },
  { name: "CSS", group: "language", icon: SiCss },
  { name: "C", group: "language", icon: SiC },
  { name: "React", group: "framework", icon: SiReact },
  { name: "Spring Boot", group: "framework", icon: SiSpringboot },
  { name: "Bootstrap", group: "framework", icon: SiBootstrap },
  { name: "Chart.js", group: "framework", icon: SiChartdotjs },
  { name: "Git", group: "tool", icon: SiGit },
  { name: "GitHub", group: "tool", icon: SiGithub },
  { name: "VS Code", group: "tool", icon: VscVscode },
  { name: "Vite", group: "tool", icon: SiVite },
];

export default SKILLS;
