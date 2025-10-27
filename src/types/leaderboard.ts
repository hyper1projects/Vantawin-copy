export interface LeaderboardPlayer {
  id: string;
  rank: number;
  avatar: string; // URL to avatar image
  playerName: string;
  winRate: number; // Percentage
  gamesPlayed: number;
}