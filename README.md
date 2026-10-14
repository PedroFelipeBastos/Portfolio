
# ✦ Portfólio — Pedro Felipe Bastos 👨‍💻

> [!NOTE]
> Portfólio profissional bilíngue (PT/EN) com linha do tempo de projetos, **dados ao vivo do GitHub** e formulário de contato com envio real de e-mail.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este repositório contém o <b>portfólio profissional</b> de <b>Pedro Felipe Bastos</b>, estudante de <i>Engenharia de Software</i> na <b>PUC Minas</b>, desenvolvido como o <b>Laboratório 01</b> da disciplina de <i>Desenvolvimento e Integração de Aplicações Web (DIAW)</i>. É uma <b>SPA em React + Vite</b>, traduzida para <b>português e inglês</b>, que reaproveita os projetos de referência da disciplina (<b>GitHubAPI</b>, <b>WakaTimeAPI</b>, <b>Internacionalizacao_i18n</b> e <b>SecureLoginPUC_React</b>) e tem identidade visual inspirada no template <a href="https://future.framer.website/"><b>Future Folio</b></a>.
      </div>
    </td>
    <td>
      <div>
        <img src="public/favicon.svg" alt="Logo do portfólio" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

![React](https://img.shields.io/badge/React-19.3.0-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8.3.4-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-7.18.4-007ec6?style=for-the-badge&logo=reactrouter&logoColor=white) ![i18next](https://img.shields.io/badge/i18next-26.4.4-007ec6?style=for-the-badge&logo=i18next&logoColor=white) ![EmailJS](https://img.shields.io/badge/EmailJS-5.0.3-007ec6?style=for-the-badge&logo=maildotru&logoColor=white) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-007ec6?style=for-the-badge&logo=vercel&logoColor=white) ![GitHub repo size](https://img.shields.io/github/repo-size/PedroFelipeBastos/Portfolio?style=for-the-badge&logo=files) ![GitHub last commit](https://img.shields.io/github/last-commit/PedroFelipeBastos/Portfolio?style=for-the-badge&logo=clockify)

| Sprint       | Entrega                                                                                                             |  Situação   |
| :----------- | :------------------------------------------------------------------------------------------------------------------ | :---------: |
| **Lab01S01** | Repositório, wireframes no Figma, protótipo, navegação e layout principal                                           | ✅ Concluído |
| **Lab01S02** | Sobre (PT/EN), Projetos (timeline dinâmica), Experiências, Contato com envio de e-mail, validações e responsividade | ✅ Concluído |
| **Lab01S03** | Deploy na Vercel, ajustes visuais, imagens/GIFs dos projetos e README final                                         | ✅ Concluído |

---

## 📚 Índice

- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Identidade Visual](#-identidade-visual)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Reaproveitamento dos projetos da disciplina](#️-reaproveitamento-dos-projetos-da-disciplina)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Protótipos](#-protótipos)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autor](#-autor)
- [Consultas](#-consultas)

---

## 🔗 Links Úteis

- 🌐 **Site publicado:** [Acesse o portfólio](https://portfolio-omega-nine-uyj05nep5x.vercel.app/)
- 🎨 **Wireframes:** [Protótipo no Figma](https://www.figma.com/design/cRP7XXtTkeyHc0advhcqHH/Portf%C3%B3lio-%E2%80%94-Wireframes?node-id=0-1&t=iS1ePbhkU5emFy6y-1)
- 🖤 **Referência visual:** [Future Folio — template para Framer](https://future.framer.website/)
- 🐙 **Repositório:** [github.com/PedroFelipeBastos/Portfolio](https://github.com/PedroFelipeBastos/Portfolio)

---

## 📝 Sobre o Projeto

Site de **portfólio profissional** que apresenta minha trajetória, meus projetos, as tecnologias que uso e as formas de contato, servindo tanto como **entrega acadêmica** quanto como **cartão de visitas** para vagas de estágio.

- **Contexto:** Laboratório 01 de **DIAW** (Engenharia de Software — PUC Minas, 2º período), dividido em três sprints: planejamento e prototipação, funcionalidades principais e hospedagem.
- **O que entrega:** apresentação em dois idiomas, linha do tempo de projetos com imagens e links, trajetória acadêmica, dados ao vivo do GitHub e um formulário que envia e-mail de verdade.

---

## ✨ Funcionalidades Principais

- 🏠 **Home:** o próprio portfólio, com 4 cards que levam aos tópicos — **Sobre mim**, **Projetos**, **Experiências** e **Tecnologias**. O **Contato** fica no menu.
- 👤 **Sobre mim (PT/EN):** foto e um parágrafo com formação, área de atuação, interesses e objetivo.
- 🗂️ **Projetos:** linha do tempo do mais antigo ao mais recente, gerada a partir de `src/data/projects.js`, com filtro por categoria. Cada projeto tem página com resumo, tecnologias, equipe, link do GitHub e imagens/GIFs.
- 🎓 **Experiências:** formação (PUC Minas e UFOP) e projetos acadêmicos.
- 🧰 **Tecnologias:** cards da stack e, abaixo, os dados ao vivo do **GitHub** — perfil, indicadores, calendário de contribuições, linguagens e repositórios.
- ✉️ **Contato:** ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub, Instagram), formulário com validação e envio pelo **EmailJS** e hora local de Belo Horizonte.
- 🌐 **PT/EN** com i18next, no menu e no rodapé.
- 📱 **Responsivo**, do celular ao desktop.

---

## 🎨 Identidade Visual

O design segue o template **[Future Folio](https://future.framer.website/)** (Paul / Craftwork, feito para Framer), recriado em React e CSS puro. As imagens são da minha foto e dos meus projetos.

| Elemento              | Escolha                                                                                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **Cores**             | Fundo preto `#000`, texto branco e cinza `#8e8e8e` para textos secundários                                                            |
| **Títulos**           | [Inter Tight](https://fonts.google.com/specimen/Inter+Tight), com espaçamento negativo entre letras                                   |
| **Textos auxiliares** | [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) em caixa alta, com `[ COLCHETES ]` nos links                             |
| **Layout**            | Hero centralizado, grade de cards com cantos de 36px e etiquetas em pílula, páginas internas com texto à esquerda e imagens à direita |
| **Cabeçalho**         | Fixo com `mix-blend-mode: difference`, que inverte as cores quando passa por cima das imagens                                         |

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

- **Biblioteca:** React 19 (SPA)
- **Linguagem:** JavaScript (ES2022+) e JSX
- **Rotas:** React Router 7
- **Internacionalização:** i18next + react-i18next + detector de idioma
- **Estilização:** CSS puro com variáveis, um arquivo `.css` por componente
- **Build Tool:** Vite 8

### 🖥️ Back-end (serverless)

- **Runtime:** Node.js (Vercel Functions)
- **Funções:** `api/github.js`, `api/wakatime.js` e `api/codando.js`, que mantêm as chaves das APIs no servidor
- **Serviços externos:** GitHub REST API, GitHub Contributions API, WakaTime API e EmailJS

### ⚙️ Infraestrutura

- **Hospedagem:** Vercel (deploy automático a cada `git push`)
- **Qualidade:** Oxlint

### 📦 Dependências e bibliotecas

| Pacote                             | Versão  | Para que serve                                     |
| :--------------------------------- | :-----: | :------------------------------------------------- |
| `react` / `react-dom`              | 19.3.0  | Interface em componentes                           |
| `react-router-dom`                 | 7.18.4  | Rotas da SPA e filtro na URL                       |
| `i18next`                          | 26.4.4  | Motor de tradução                                  |
| `react-i18next`                    | 17.0.16 | `useTranslation()` nos componentes                 |
| `i18next-browser-languagedetector` |  8.2.1  | Detecta o idioma (URL, escolha salva ou navegador) |
| `country-flag-icons`               | 1.6.20  | Bandeiras do seletor de idioma                     |
| `@emailjs/browser`                 |  5.0.3  | Envio do formulário de contato                     |
| `react-icons`                      |  5.7.0  | Ícones da stack, dos contatos e dos painéis        |
| `vite` _(dev)_                     |  8.3.4  | Servidor de desenvolvimento e build                |
| `@vitejs/plugin-react` _(dev)_     |  6.1.2  | Suporte a React no Vite                            |
| `oxlint` _(dev)_                   | 1.88.0  | Linter                                             |

---

## ♻️ Reaproveitamento dos projetos da disciplina

As integrações seguem os projetos de referência do [repositório da disciplina](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/React), com a mesma estrutura `config/` → `services/` → `components/` → `api/`:

| Funcionalidade                | Projeto de origem           | Arquivos                                                                                                                                                            | Adaptação                                                         |
| :---------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------- |
| GitHub ao vivo                | `GitHubAPI`                 | `components/GitHub/*`, `config/githubConfig.js`, `services/githubService.js`, `api/_github.js`, `api/github.js`                                                     | Usuário `PedroFelipeBastos`, busca desligada e tema escuro        |
| Integração WakaTime           | `WakaTimeAPI`               | `components/WakaTimeStats/*`, `config/wakatimeConfig.js`, `services/wakatimeService.js`, `api/_wakatime.js`, `api/wakatime.js`, `api/_codando.js`, `api/codando.js` | Incluída no projeto; o painel não é exibido no site               |
| Tradução PT/EN                | `Internacionalizacao_i18n`  | `components/LanguageSwitcher/*`, `config/i18nConfig.js`, `i18n/index.js`                                                                                            | Português e inglês                                                |
| Envio de e-mail               | `SecureLoginPUC_React`      | `config/emailJsConfig.js`, `services/sendEmailService.js`, `pages/Contact/ContactForm.jsx`                                                                          | Template de contato no lugar do de recuperação de senha           |
| Rotas `/api` no `npm run dev` | `GitHubAPI` / `WakaTimeAPI` | `vite.config.js`                                                                                                                                                    | As três rotas no mesmo plugin                                     |

Desenvolvido especificamente para este projeto: o layout (cabeçalho, menu, rodapé e cards), as páginas e os dados de `src/data/`.

---

## 🏗 Arquitetura

O portfólio é uma **SPA estática** (React + Vite) com **funções serverless**. A Vercel entrega o `dist/` pela CDN e executa as funções de `api/` apenas para as integrações que precisam de chave secreta.

```mermaid
flowchart LR
  V["👤 Visitante"] -->|HTTPS| CDN["Vercel CDN<br/>dist/ (SPA)"]

  subgraph NAV["Navegador"]
    SPA["React SPA<br/>React Router · i18next"]
    DATA["src/data/<br/>projetos · experiências · stack"]
    SPA --> DATA
  end

  CDN --> SPA
  SPA -->|"GET /api/github"| FG["api/github.js"]
  SPA -->|"emailjs.send()"| EJ["EmailJS"]

  FG --> GH["GitHub API"]
  EJ --> MAIL["📬 Gmail"]
```

- **Conteúdo como dados:** projetos, experiências e tecnologias ficam em `src/data/*.js`, com campos `{ pt, en }`. A linha do tempo e as páginas de projeto são geradas a partir deles.
- **Chaves fora do navegador:** só os IDs públicos do EmailJS usam o prefixo `VITE_`. O `GITHUB_TOKEN` e a `WAKATIME_API_KEY` são lidos apenas pelas funções em `api/` (na Vercel) ou pelo `vite.config.js` (no `npm run dev`).
- **Code splitting:** a página inicial vem no bundle principal; as outras rotas são carregadas sob demanda com `React.lazy`.

---

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js** LTS (20 ou superior)
- **npm**
- Conta no [EmailJS](https://www.emailjs.com/) para o formulário de contato

### 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` a partir do modelo:

```bash
cp .env.example .env.local
```

| Variável                   | Onde é usada | Obrigatória | Descrição                                                                             |
| :------------------------- | :----------- | :---------: | :------------------------------------------------------------------------------------ |
| `VITE_EMAILJS_SERVICE_ID`  | Navegador    |     ✅      | ID do serviço no EmailJS                                                              |
| `VITE_EMAILJS_TEMPLATE_ID` | Navegador    |     ✅      | ID do template (usa `{{name}}`, `{{email}}`, `{{message}}` e `{{time}}`)              |
| `VITE_EMAILJS_PUBLIC_KEY`  | Navegador    |     ✅      | Public Key da conta EmailJS                                                           |
| `GITHUB_TOKEN`             | Servidor     |     ❌      | Token só de leitura; aumenta o limite da API do GitHub de 60 para 5.000 chamadas/hora |
| `WAKATIME_API_KEY`         | Servidor     |     ❌      | Chave da API do WakaTime, usada pela integração `api/wakatime.js`                     |

### 📦 Instalação e execução

```bash
git clone https://github.com/PedroFelipeBastos/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Acesse **http://localhost:5173**.

| Script            | O que faz                                         |
| :---------------- | :------------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento (com as rotas `/api`) |
| `npm run build`   | Gera a versão de produção em `dist/`              |
| `npm run preview` | Serve o `dist/` localmente                        |
| `npm run lint`    | Analisa o código com o Oxlint                     |

---

## 🚀 Deploy

O site está publicado na **Vercel**: [portfolio-omega-nine-uyj05nep5x.vercel.app](https://portfolio-omega-nine-uyj05nep5x.vercel.app/).

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Mantenha o _Framework Preset_ **Vite** (build `npm run build`, saída `dist/`).
3. Em **Environment Variables**, cadastre as variáveis do EmailJS.
4. Clique em **Deploy**. A cada `git push` na `main`, a Vercel publica uma nova versão.

O `vercel.json` redireciona as rotas (exceto `/api/*`) para o `index.html`, então links como `/projetos/amplify` funcionam ao recarregar a página.

---

## 📂 Estrutura de Pastas

```
.
├── api/                          # ☁️ Vercel Functions (GitHubAPI e WakaTimeAPI)
│   ├── _github.js / github.js
│   ├── _wakatime.js / wakatime.js
│   └── _codando.js / codando.js
├── docs/
│   ├── imgs/                     # 🖼️ Capturas de tela
│   └── prototipos/               # 🖌 Wireframes exportados do Figma
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── projects/                 # Imagens e GIFs de cada projeto
├── src/
│   ├── assets/                   # Foto do perfil
│   ├── components/
│   │   ├── GitHub/               # Do projeto GitHubAPI
│   │   ├── WakaTimeStats/        # Do projeto WakaTimeAPI
│   │   ├── LanguageSwitcher/     # Do projeto Internacionalizacao_i18n
│   │   ├── Header/ Menu/ Footer/ Layout/ Page/ ProjectCard/ Star/
│   ├── config/                   # githubConfig, wakatimeConfig, emailJsConfig, i18nConfig, siteConfig
│   ├── data/                     # 📝 projects.js, experiences.js, skills.js
│   ├── i18n/                     # i18next e traduções (pt-BR, en)
│   ├── pages/                    # Home, About, Projects, ProjectDetail, Experience, Stack, Contact, NotFound
│   ├── services/                 # githubService, wakatimeService, sendEmailService
│   ├── styles/global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 🖌 Protótipos

Wireframes de média fidelidade da página inicial e da página Sobre mim, feitos no [Figma](https://www.figma.com/design/cRP7XXtTkeyHc0advhcqHH/Portf%C3%B3lio-%E2%80%94-Wireframes?node-id=0-1&t=iS1ePbhkU5emFy6y-1).

| Home | Sobre mim |
| :---: | :---: |
| <img src="docs/prototipos/home.png" alt="Wireframe da página inicial" width="420"> | <img src="docs/prototipos/sobre.png" alt="Wireframe da página Sobre mim" width="420"> |

---

## 🎥 Demonstração

| Home | Tópicos da home |
| :---: | :---: |
| <img src="docs/imgs/home.jpg" alt="Home" width="420"> | <img src="docs/imgs/home-cards-2.jpg" alt="Cards Experiências e Tecnologias" width="420"> |
| **Menu** | **Sobre mim** |
| <img src="docs/imgs/menu.jpg" alt="Menu" width="420"> | <img src="docs/imgs/sobre.jpg" alt="Sobre mim" width="420"> |
| **Projetos** | **Página de um projeto** |
| <img src="docs/imgs/projetos.jpg" alt="Linha do tempo" width="420"> | <img src="docs/imgs/projeto-detalhe.jpg" alt="Royal Flush" width="420"> |
| **Experiências** | **Tecnologias** |
| <img src="docs/imgs/experiencias.jpg" alt="Experiências" width="420"> | <img src="docs/imgs/tecnologias.jpg" alt="Stack" width="420"> |
| **Dados ao vivo (GitHub)** | **Contato** |
| <img src="docs/imgs/tecnologias-dados.jpg" alt="Painel do GitHub" width="420"> | <img src="docs/imgs/contato.jpg" alt="Contato" width="420"> |
| **Hora local** | **Versão em inglês** |
| <img src="docs/imgs/contato-hora.jpg" alt="Hora local" width="420"> | <img src="docs/imgs/home-en.jpg" alt="Home em inglês" width="420"> |

### 📱 Celular

<img src="docs/imgs/mobile.jpg" alt="Telas do portfólio no celular" width="100%">

---

## 🧪 Testes

```bash
npm run lint
npm run build
```

O projeto não tem testes automatizados. A verificação foi manual, no desktop (1440×900) e no celular (390×844): navegação entre as rotas, menu, troca de idioma, filtro da linha do tempo, validações e envio do formulário, painel do GitHub com dados reais e ausência de rolagem horizontal no celular.

---

## 🔗 Documentações utilizadas

- 📖 [React](https://react.dev/reference/react)
- 📖 [Vite](https://vite.dev/config/)
- 📖 [React Router](https://reactrouter.com/)
- 📖 [react-i18next](https://react.i18next.com/)
- 📖 [EmailJS](https://www.emailjs.com/docs/sdk/send/)
- 📖 [GitHub REST API](https://docs.github.com/rest)
- 📖 [WakaTime API](https://wakatime.com/developers)
- 📖 [Vercel Functions](https://vercel.com/docs/functions)

---

## 👥 Autor

| 👤 Nome             | 🖼️ Foto                                                                                | :octocat: GitHub                                                                                                                                                         | 💼 LinkedIn                                                                                                                                                                           | 📤 Gmail                                                                                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pedro Felipe Bastos | <div align="center"><img src="src/assets/pedro.webp" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/PedroFelipeBastos"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/pedro-felipe-bastos"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:pedrobaastos05@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |

---

## 🙏 Consultas

- [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) — Projetos de referência reaproveitados aqui.
- **Paul / Craftwork** — Template [Future Folio](https://future.framer.website/), referência da identidade visual.

---
