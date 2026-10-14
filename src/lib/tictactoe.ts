import type { Cell, Result } from '@/types/game';

export const LINES: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export function getResult(board: Cell[]): Result {
  for (const line of LINES) {
    const [a, b, c] = line;
    const v = board[a];
    if (v && v === board[b] && v === board[c]) {
      return { status: 'win', winner: v, line };
    }
  }
  if (board.every((c) => c !== null)) return { status: 'draw' };
  return { status: 'playing' };
}
