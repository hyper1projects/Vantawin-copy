// src/types/game.ts
export interface Game {
  id: string;
  time: string;
  date: string;
  team1: { name: string; logoIdentifier: string };
  team2: { name: string; logoIdentifier: string };
  odds: { team1: number; draw: number; team2: number };
  league: string;
  isLive: boolean;
  gameView: string;
}