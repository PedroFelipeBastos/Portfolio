import { handleWakaTime } from "./_wakatime.js";

export default function handler(req, res) {
  return handleWakaTime(req, res, process.env);
}
