import { makePersisted } from "@solid-primitives/storage";
import { createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { RGBColor, hexToRgb, randomColor } from "../../util/colors";
import { baseVersion } from "./view";
import seedrandom from "seedrandom";
import { getColorName } from "../../util/names";

export interface Game {
  version: string;
  guess: RGBColor;
  score?: RGBColor;
  gamekey: number;
  color: RGBColor;
  colorName: string;
}

export function gamekey() {
  const now: Date = new Date();
  // starting date
  const firstGame: Date = new Date(2024, 6, 1, 0, 0, 0);
  const estOffset = -5 * 60; // EST is UTC-5 hours
  const estFirstGame = new Date(firstGame.getTime() + estOffset * 60 * 1000);

  const duration: number =
    (now.getTime() - estFirstGame.getTime()) / (1000 * 60 * 60 * 24);

  // return duration;
  return Math.floor(duration);
}

export function today(gamekey: number): Game {
  const variance = 255;
  const rng = seedrandom(gamekey.toString());
  const color = randomColor(rng, variance);
  const colorName = getColorName(color);
  const guess = randomColor(rng, variance);

  return {
    version: import.meta.env.VITE_VERSION ?? baseVersion,
    gamekey,
    score: undefined,
    colorName: colorName[1],
    guess: hexToRgb("#FFFFFF"),
    color: hexToRgb(color),
  };
}

const GameContext = createContext<[Game, SetStoreFunction<Game>]>([
  {} as Game,
  () => {},
]);

export function GameProvider(props: any) {
  let value = makePersisted(createStore(today(gamekey())), {
    name: "pastel_game",
  });

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
