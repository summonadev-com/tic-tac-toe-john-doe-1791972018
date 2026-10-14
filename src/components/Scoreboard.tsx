import type { Player, Scores } from '@/types/game';

type Props = { scores: Scores; active: Player | null };

export function Scoreboard({ scores, active }: Props) {
  const items: { label: string; value: number; on: boolean; color: string }[] = [
    { label: 'Player X', value: scores.X, on: active === 'X', color: 'text-red-600 dark:text-red-400' },
    { label: 'Draws', value: scores.draws, on: false, color: 'text-slate-600 dark:text-slate-300' },
    { label: 'Player O', value: scores.O, on: active === 'O', color: 'text-slate-700 dark:text-slate-200' },
  ];
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {items.map((it) => (
        <div
          key={it.label}
          className={`rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800 text-center ring-2 transition ${
            it.on ? 'ring-red-500' : 'ring-transparent'
          }`}
        >
          <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{it.label}</div>
          <div className={`text-3xl font-bold ${it.color}`}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}
