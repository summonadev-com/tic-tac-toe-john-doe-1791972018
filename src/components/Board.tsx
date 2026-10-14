import type { Cell } from '@/types/game';

type Props = {
  board: Cell[];
  winLine: number[];
  disabled: boolean;
  onPlay: (i: number) => void;
};

export function Board({ board, winLine, disabled, onPlay }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {board.map((cell, i) => {
        const win = winLine.includes(i);
        return (
          <button
            key={i}
            onClick={() => onPlay(i)}
            disabled={disabled || cell !== null}
            aria-label={`Square ${i + 1}${cell ? `, ${cell}` : ''}`}
            className={`flex h-24 w-24 items-center justify-center rounded-2xl text-5xl font-extrabold shadow-md transition sm:h-28 sm:w-28 sm:text-6xl ${
              win
                ? 'bg-red-600 scale-105'
                : 'bg-white ring-1 ring-slate-200 enabled:hover:bg-slate-100 dark:bg-slate-800 dark:ring-0 dark:enabled:hover:bg-slate-700'
            } ${cell === 'X' ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-200'} ${win ? '!text-white' : ''}`}
          >
            {cell}
          </button>
        );
      })}
    </div>
  );
}
