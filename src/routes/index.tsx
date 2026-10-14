import { createFileRoute } from '@tanstack/react-router';
import { Board } from '@/components/Board';
import { Scoreboard } from '@/components/Scoreboard';
import { useTicTacToe } from '@/hooks/useTicTacToe';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { board, current, result, scores, play, newRound, resetScores } = useTicTacToe();
  const status =
    result.status === 'win'
      ? `${result.winner} wins!`
      : result.status === 'draw'
        ? "It's a draw"
        : `${current}'s turn`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 p-4 text-slate-100">
      <h1 className="text-4xl font-extrabold tracking-tight">Tic Tac Toe</h1>
      <Scoreboard scores={scores} active={result.status === 'playing' ? current : null} />
      <p className="text-xl font-semibold text-amber-300">{status}</p>
      <Board
        board={board}
        winLine={result.status === 'win' ? result.line : []}
        disabled={result.status !== 'playing'}
        onPlay={play}
      />
      <div className="flex gap-3">
        <button
          onClick={newRound}
          className="rounded-lg bg-amber-300 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-200"
        >
          New round
        </button>
        <button
          onClick={resetScores}
          className="rounded-lg bg-slate-800 px-5 py-2 font-semibold hover:bg-slate-700"
        >
          Reset scores
        </button>
      </div>
    </main>
  );
}
