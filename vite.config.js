import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { CODANDO_PATH, handleCodando } from "./api/_codando.js";
import { GITHUB_PATH, handleGitHub } from "./api/_github.js";
import { WAKATIME_PATH, handleWakaTime } from "./api/_wakatime.js";

const ROUTES = {
  [GITHUB_PATH]: handleGitHub,
  [WAKATIME_PATH]: handleWakaTime,
  [CODANDO_PATH]: handleCodando,
};

function localApi(env) {
  const middleware = (req, res, next) => {
    const handler = ROUTES[new URL(req.url, "http://localhost").pathname];
    if (!handler) return next();
    handler(req, res, env).catch(next);
  };

  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), localApi(env)],
  };
});
