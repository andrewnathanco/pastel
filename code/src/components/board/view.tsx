import { Signal, createEffect, createSignal } from "solid-js";
import { rgbToHex, hexToRgb, calculateDifference } from "../../util/colors";
import { Game, useGame } from "../game/service";
import { useInfoDialog } from "../info/view";
import { getShare } from "./share";

export function Board() {
  const [game, setGame] = useGame();

  createEffect(() => {});

  return (
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-1">
        <div
          style={{ "background-color": rgbToHex(game?.color) }}
          class="flex-1 w-full rounded-md h-24 text-center"
        ></div>
        <div
          style={{ "background-color": rgbToHex(game?.guess) }}
          class="w-24 rounded-md"
        ></div>
      </div>
      {!game.score ? <ColorPickers /> : <Score />}
      <Buttons />
    </div>
  );
}

function Score() {
  const [game, _] = useGame();

  return (
    <div class="flex flex-col space-y-1 text-3xl">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-thorns-500 rounded-lg"></div>
        <div>{game.score?.r}</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-killarney-500 rounded-lg"></div>
        <div>{game.score?.g}</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-blue-500 rounded-lg"></div>
        <div>{game.score?.b}</div>
      </div>
    </div>
  );
}

function ColorPickers() {
  const [game, setGame] = useGame();

  return (
    <div class="flex flex-col">
      <ColorSlider
        color={game.guess?.r}
        setColor={(r: number) => {
          const newGuess = { ...game.guess };
          newGuess.r = r;
          setGame("guess", newGuess);
        }}
        id={1}
      />
      <ColorSlider
        color={game.guess?.g}
        setColor={(g: number) => {
          const newGuess = { ...game.guess };
          newGuess.g = g;
          setGame("guess", newGuess);
        }}
        id={2}
      />
      <ColorSlider
        color={game.guess?.b}
        setColor={(b: number) => {
          const newGuess = { ...game.guess };
          newGuess.b = b;
          setGame("guess", newGuess);
        }}
        id={3}
      />
    </div>
  );
}

function ColorSlider(props: { color: number; setColor: Function; id: number }) {
  const color = () => props.color;

  return (
    <div>
      <input
        id="default-range"
        type="range"
        min="0"
        max="255"
        value={color()}
        onInput={(e) => {
          props.setColor(parseInt(e.target.value));
        }}
        classList={{
          "range-thumb-red": props.id == 1,
          "range-thumb-green": props.id == 2,
          "range-thumb-blue": props.id == 3,
        }}
        class="range-thumb my-8"
      />
    </div>
  );
}

export function Buttons() {
  const [game, _] = useGame();

  const gameOver = () => {
    return !!game.score;
  };

  return (
    <div class="flex flex-col space-y-2">
      {gameOver() ? <ShareButton /> : <SubmitButton />}
    </div>
  );
}
export function InfoButton() {
  const [game, _] = useGame();
  const [__, { open }] = useInfoDialog();

  return (
    <div class="w-full">
      <button
        onClick={() => {
          open();
        }}
        class="w-full rounded-md p-2 text-woodsmoke-50 dark:text-woodsmoke-950 dark:bg-dove-200 bg-dove-800"
        id="info"
      >
        Info
      </button>
    </div>
  );
}

export function ShareButton() {
  const [game, _] = useGame();

  return (
    <div class="w-full">
      <button
        onClick={() => {
          const [text, url] = getShare(game);

          try {
            navigator?.share({
              text,
              url,
            });
          } catch {
            navigator?.clipboard?.writeText(`${text}\n${url}`);
          }
        }}
        class="w-full rounded-md p-4 text-woodsmoke-50 dark:text-woodsmoke-950 dark:bg-killarney-500 bg-killarney-700"
        id="submit"
      >
        Share
      </button>
    </div>
  );
}

export function SubmitButton() {
  const [game, setGame] = useGame();

  return (
    <div class="w-full">
      <button
        onClick={() => {
          setGame(
            "score",
            calculateDifference(rgbToHex(game.color), rgbToHex(game.guess))
          );
        }}
        class="w-full rounded-md p-4 text-gray-100 dark:text-black bg-dove-900 dark:bg-dove-100"
        id="submit"
      >
        Submit
      </button>
    </div>
  );
}
