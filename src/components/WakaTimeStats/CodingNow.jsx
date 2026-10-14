import { useEffect, useState } from "react";
import { FiClock, FiFolder, FiGitBranch, FiLock, FiMonitor, FiSun } from "react-icons/fi";
import WAKATIME_CONFIG from "../../config/wakatimeConfig";
import { fetchCodingNow } from "../../services/wakatimeService";
import { formatAgo, formatDuration, formatTime } from "./format";
import { languageColor } from "./languageColors";

const REFRESH_MS = WAKATIME_CONFIG.CODING_NOW.REFRESH_SECONDS * 1000;

function useCodingNow() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let alive = true;
    let timer = null;

    const refresh = () => {
      if (document.visibilityState === "hidden") return;
      fetchCodingNow().then((result) => {
        if (!alive) return;
        setState(result);
        if (result.status === "unavailable" && timer) {
          clearInterval(timer);
          timer = null;
        }
      });
    };

    refresh();
    timer = setInterval(refresh, REFRESH_MS);
    document.addEventListener("visibilitychange", refresh);

    return () => {
      alive = false;
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return state;
}

function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

export default function CodingNow({ showProject = true }) {
  const state = useCodingNow();
  const now = useNow();

  if (state.status !== "ok") return null;

  const { active, last, todaySeconds } = state.data;
  const named = showProject && last?.isPublic;
  const projectName = named ? last.project : "projeto privado";

  if (!active) {
    return (
      <section className="waka-now idle" aria-label="Codando agora">
        <span className="waka-now-status">
          <span className="waka-now-dot" aria-hidden="true" />
          Parado agora
        </span>
        <span className="waka-now-idle-text">
          {last ? (
            <>
              Última atividade {formatAgo(last.at, now)} em <strong>{projectName}</strong>
              {last.language && ` · ${last.language}`}
            </>
          ) : (
            "Nenhuma atividade no editor hoje"
          )}
          {todaySeconds >= 60 && ` · ${formatDuration(todaySeconds)} hoje`}
        </span>
      </section>
    );
  }

  const sessionSeconds = (last.at - last.sessionStart) / 1000;

  return (
    <section className="waka-now active" aria-label="Codando agora" aria-live="polite">
      <div className="waka-now-head">
        <span className="waka-now-status">
          <span className="waka-now-dot" aria-hidden="true" />
          Codando agora
        </span>
        <span className="waka-now-ago">último sinal {formatAgo(last.at, now)}</span>
      </div>

      <p className="waka-now-project">
        <span className="waka-now-name">
          {named ? <FiFolder aria-hidden="true" /> : <FiLock aria-hidden="true" />}
          <strong title={projectName}>{projectName}</strong>
        </span>
        {named && last.branch && (
          <span className="waka-now-branch">
            <FiGitBranch aria-hidden="true" />
            {last.branch}
          </span>
        )}
      </p>

      <ul className="waka-now-meta">
        {last.language && (
          <li>
            <span
              className="waka-dot"
              style={{ "--lang": languageColor(last.language) }}
              aria-hidden="true"
            />
            {last.language}
          </li>
        )}
        {last.editor && (
          <li>
            <FiMonitor aria-hidden="true" />
            {last.editor}
          </li>
        )}
        {sessionSeconds >= 60 && (
          <li>
            <FiClock aria-hidden="true" />
            sessão de {formatDuration(sessionSeconds)} (desde {formatTime(last.sessionStart)})
          </li>
        )}
        {last.projectTodaySeconds >= 60 && (
          <li>
            <FiSun aria-hidden="true" />
            {formatDuration(last.projectTodaySeconds)} hoje neste projeto
          </li>
        )}
      </ul>
    </section>
  );
}
