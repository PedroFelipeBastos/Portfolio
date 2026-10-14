const PROJECTS = [
  {
    id: "royal-flush",
    tag: "Python · Pygame",
    name: "Royal Flush",
    start: "2026-05",
    end: "2026-06",
    tagline: {
      pt: "Jogo da memória com tema de cassino",
      en: "Casino-themed memory game",
    },
    summary: {
      pt: "Jogo da memória em Python e Pygame: encontre os pares perfeitos de cartas, fuja do Coringa e avance de nível. Feito em grupo, com testes em pytest.",
      en: "A memory game in Python and Pygame: find the perfect card pairs, avoid the Joker and level up. Built as a team, with pytest tests.",
    },
    tech: ["Python", "Pygame", "pytest", "Git"],
    team: "Maria Clara Fernandes Benatti, Sofia Liva Mendes Faria, Pedro Felipe Bastos",
    repo: "https://github.com/dracwnia/Royal-Flush",
    media: [
      {
        src: "/projects/royal-flush/tela_inicial.gif",
        alt: { pt: "Tela inicial do Royal Flush", en: "Royal Flush title screen" },
      },
      {
        src: "/projects/royal-flush/tela_gameover.gif",
        alt: { pt: "Tela de game over do Royal Flush", en: "Royal Flush game over screen" },
      },
    ],
  },
  {
    id: "amplify",
    tag: "JavaScript",
    name: "Amplify",
    start: "2026-06",
    end: "2026-06",
    tagline: {
      pt: "Teoria e prática para guitarristas",
      en: "Theory and practice for guitar players",
    },
    summary: {
      pt: "Plataforma web de teoria musical: tons, escalas, campo harmônico e análise de músicas reais, com login, favoritos, CRUD e gráficos consumindo uma API REST.",
      en: "A music theory web platform: keys, scales, harmonic fields and real song analysis, with login, favorites, CRUD and charts consuming a REST API.",
    },
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "JSON Server"],
    team: "Pedro Felipe Bastos",
    repo: "https://github.com/PedroFelipeBastos/Entrega_final_DIW",
    media: [
      {
        src: "/projects/amplify/03-musicas.jpg",
        alt: { pt: "Músicas curadas para análise", en: "Curated songs for analysis" },
      },
      {
        src: "/projects/amplify/01-home.jpg",
        alt: { pt: "Página inicial do Amplify", en: "Amplify home page" },
      },
      {
        src: "/projects/amplify/02-tons.jpg",
        alt: { pt: "Todos os tons", en: "All keys" },
      },
      {
        src: "/projects/amplify/04-detalhe-tom.jpg",
        alt: { pt: "Detalhe do tom de Dó maior", en: "C major key detail" },
      },
      {
        src: "/projects/amplify/05-analise-musica.jpg",
        alt: { pt: "Análise de uma música", en: "Song analysis" },
      },
    ],
  },
];

export const sortedProjects = () =>
  [...PROJECTS].sort((a, b) => a.start.localeCompare(b.start));

export default PROJECTS;
