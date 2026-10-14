import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const CONTACTS = [
  {
    id: "email",
    label: "E-mail",
    value: "pedrobaastos05@gmail.com",
    href: "mailto:pedrobaastos05@gmail.com",
    icon: FiMail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+55 31 98918-0696",
    href: "https://wa.me/5531989180696",
    icon: FaWhatsapp,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/pedro-felipe-bastos",
    href: "https://www.linkedin.com/in/pedro-felipe-bastos",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@PedroFelipeBastos",
    href: "https://github.com/PedroFelipeBastos",
    icon: FaGithub,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@p.febastos",
    href: "https://www.instagram.com/p.febastos/",
    icon: FaInstagram,
    external: true,
  },
];

export const NAV_ITEMS = [
  { path: "/sobre", key: "about" },
  { path: "/projetos", key: "projects" },
  { path: "/experiencias", key: "experience" },
  { path: "/tecnologias", key: "stack" },
  { path: "/contato", key: "contact" },
];
