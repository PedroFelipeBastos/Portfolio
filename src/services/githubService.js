import GITHUB_CONFIG from "../config/githubConfig";

export class GitHubError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

const cache = new Map();

async function request(resource, username) {
  const key = `${resource}:${username.toLowerCase()}`;
  if (cache.has(key)) return cache.get(key);

  const promise = (async () => {
    let response;
    try {
      const params = new URLSearchParams({ resource, username });
      response = await fetch(`${GITHUB_CONFIG.API_PATH}?${params}`);
    } catch {
      throw new GitHubError("network", "Sem conexão com o servidor.");
    }

    if (!response.headers.get("content-type")?.includes("application/json")) {
      throw new GitHubError(
        "no_api",
        "A rota /api/github não existe aqui. Rode com npm run dev ou publique na Vercel."
      );
    }

    const body = await response.json();
    if (!response.ok) {
      throw new GitHubError(body.error ?? "error", body.message ?? `HTTP ${response.status}`);
    }
    return body;
  })();

  cache.set(key, promise);
  promise.catch(() => cache.delete(key));
  return promise;
}

export const fetchProfile = (username) => request("profile", username);
export const fetchRepos = (username) => request("repos", username);
export const fetchContributions = (username) => request("contributions", username);
