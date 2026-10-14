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
              win ? 'bg-amber-300 scale-105' : 'bg-slate-800 enabled:hover:bg-slate-700'
            } ${cell === 'X' ? 'text-sky-400' : 'text-rose-400'} ${win ? '!text-slate-900' : ''}`}
          >
            {cell}
          </button>
        );
      })}
    </div>
  );
}
