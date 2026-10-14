import { handleGitHub } from "./_github.js";

export default function handler(req, res) {
  return handleGitHub(req, res, process.env);
}
