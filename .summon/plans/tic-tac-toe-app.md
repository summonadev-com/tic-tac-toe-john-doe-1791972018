---
status: implemented
title: Two-player Tic Tac Toe with scoreboard
---

1. Add `src/types/game.ts` with shared types for a cell (X, O or empty), the player, and the game result (win with line, draw, or in progress). Outcome: one place for game types.
2. Add `src/lib/tictactoe.ts` with pure helpers: the eight winning lines, a function to find the winner and winning line, and a draw check. Outcome: game rules are separate from the UI.
3. Add `src/hooks/useTicTacToe.ts` holding the board, current player, result, and scores (X wins, O wins, draws). Provide actions to play a square, start the next round (loser or X starts alternately is not needed; X always starts) and reset the scores. Outcome: all game state in one hook.
4. Add `src/components/Board.tsx`: a 3x3 grid of large square buttons showing X and O in distinct colors, disabled once filled or when the game ends, with winning squares highlighted.
5. Add `src/components/Scoreboard.tsx`: three cards showing Player X, Draws and Player O counts, with the current player's card emphasized.
6. Update `src/routes/index.tsx` to be the game page: centered title, status line ("X's turn", "O wins!", "It's a draw"), the Board, the Scoreboard, and "New round" and "Reset scores" buttons. Style with Tailwind, responsive down to mobile.
7. Check `src/routes/__root.tsx` and `src/styles/global.css` so the page background, font and page title suit the game. Outcome: polished, working app where two people take turns on one device and scores persist across rounds until reset.
