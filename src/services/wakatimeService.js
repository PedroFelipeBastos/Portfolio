import WAKATIME_CONFIG from "../config/wakatimeConfig";

export class WakaTimeError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

const cache = new Map();

export async function fetchWakaTimeStats(range = WAKATIME_CONFIG.DEFAULT_RANGE) {
  if (cache.has(range)) return cache.get(range);

  let response;
  try {
    response = await fetch(`${WAKATIME_CONFIG.API_PATH}?range=${range}`);
  } catch {
    throw new WakaTimeError("network", "Sem conexão com o servidor.");
  }

  const isJson = response.headers.get("content-type")?.includes("application/json");
  if (!isJson) {
    throw new WakaTimeError(
      "no_api",
      "A rota /api/wakatime não existe aqui. Rode com npm run dev ou publique na Vercel."
    );
  }

  const body = await response.json();

  if (response.status === 202 || body.error === "pending") {
    throw new WakaTimeError("pending", body.message);
  }
  if (!response.ok) {
    throw new WakaTimeError(body.error ?? "error", body.message ?? `HTTP ${response.status}`);
  }

  cache.set(range, body);
  return body;
}

let codingNowRequest = null;

export function fetchCodingNow() {
  if (codingNowRequest) return codingNowRequest;

  codingNowRequest = (async () => {
    try {
      const response = await fetch(WAKATIME_CONFIG.CODING_NOW.API_PATH, {
        headers: { Accept: "application/json" },
      });
      const isJson = response.headers.get("content-type")?.includes("application/json");
      if (!isJson || response.status === 503) return { status: "unavailable" };
      if (!response.ok) return { status: "error" };

      const data = await response.json();
      return typeof data?.active === "boolean" ? { status: "ok", data } : { status: "error" };
    } catch {
      return { status: "error" };
    } finally {
      codingNowRequest = null;
    }
  })();

  return codingNowRequest;
}
