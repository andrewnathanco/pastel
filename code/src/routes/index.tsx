import { GameProvider, today, useGame } from "../components/game/service";
import { Board, InfoButton } from "../components/board/view";
import { GameInfo } from "../components/game/view";
import { ThemeToggler } from "../util/theme";
import { InfoDialog, InfoDialogProvider } from "../components/info/view";

function Buttons() {
  const [_, setGame] = useGame();

  return (
    <div class="flex space-x-2">
      <button
        class="w-full rounded-md p-2 text-woodsmoke-50 dark:text-woodsmoke-950 dark:bg-dove-200 bg-dove-800"
        onClick={() => {
          setGame(today(Math.floor(Math.random() * 3000)));
        }}
      >
        random
      </button>
      <InfoButton />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <InfoDialogProvider>
        <GameProvider>
          <main class="p-4 justify-center items-center flex flex-col">
            <InfoDialog />
            <div class="p-4 w-96 flex flex-col space-y-4">
              <div class="flex justify-between items-center">
                <GameInfo />
                <ThemeToggler />
              </div>
              <Buttons />
              <Board />
            </div>
          </main>
        </GameProvider>
      </InfoDialogProvider>
    </>
  );
}
