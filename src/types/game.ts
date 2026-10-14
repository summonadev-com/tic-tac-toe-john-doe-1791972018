export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Result =
  | { status: 'playing' }
  | { status: 'win'; winner: Player; line: number[] }
  | { status: 'draw' };
export type Scores = { X: number; O: number; draws: number };
