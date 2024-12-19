export interface Participant {
  id: number;
  name: string;
}

export type Result = 'W' | 'D' | 'L'

export interface Record {
  participantId?: number;
  score?: number;
  result?: Result;
  advanceFrom?: number;
}

export interface Match {
  matchNo: number;
  records: Record[];
  advanceTo?: number;
  isComplete: boolean;
}

export interface Round {
  roundNo: number;
  matches: Match[];
}

export interface TournamentState {
  name: string;
  participants: Participant[];
  rounds: Round[];
}
