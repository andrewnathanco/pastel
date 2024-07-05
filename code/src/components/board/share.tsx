import { Game } from "../game/service";

export function getShare(game: Game) {
  const shareURL = `${import.meta.env.VITE_BASE_URL}`;

  let score = `🟥 ${game.score?.r}\n🟩 ${game.score?.g}\n🟦 ${game.score?.b}\n`;

  return [`Pastel #${game.gamekey}: ${game.colorName}\n${score}`, shareURL];
}
