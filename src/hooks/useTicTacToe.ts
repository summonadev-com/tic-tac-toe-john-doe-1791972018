import { useState } from 'react';
import type { Cell, Player, Scores } from '@/types/game';
import { getResult } from '@/lib/tictactoe';

const empty = (): Cell[] => Array<Cell>(9).fill(null);

export function useTicTacToe() {
  const [board, setBoard] = useState<Cell[]>(empty());
  const [current, setCurrent] = useState<Player>('X');
  const [scores, setScores] = useState<Scores>({ X: 0, O: 0, draws: 0 });
  const result = getResult(board);

  function play(i: number) {
    if (board[i] || result.status !== 'playing') return;
    const next = board.slice();
    next[i] = current;
    setBoard(next);
    const r = getResult(next);
    if (r.status === 'win') {
      setScores((s) => ({ ...s, [r.winner]: s[r.winner] + 1 }));
    } else if (r.status === 'draw') {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    } else {
      setCurrent(current === 'X' ? 'O' : 'X');
    }
  }

  function newRound() {
    setBoard(empty());
    setCurrent('X');
  }

  function resetScores() {
    newRound();
    setScores({ X: 0, O: 0, draws: 0 });
  }

  return { board, current, result, scores, play, newRound, resetScores };
}
