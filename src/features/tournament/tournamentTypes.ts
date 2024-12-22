type EntityList<T> = {
  byId: {
    [key: number]: T;
  },
  allIds: number[];
}

export type TournamentSliceState = EntityList<Tournament>

export interface Tournament {
  id: number;
  name: string;
  participants: EntityList<Participant>;
  rounds: EntityList<Round>;
  matches: EntityList<Match>;
}

export interface Participant {
  id: number;
  name: string;
}

export interface Round {
  id: number;
  name: string;
  matches: number[];
}

export interface Match {
  id: number;
  records: Record[];
  isComplete: boolean;
  advanceTo?: number;
}

export interface Record {
  participantId?: number;
  score?: number;
  result?: Result;
  advanceFrom?: number;
}

type Result = 'W' | 'D' | 'L'

export interface UpdateScorePayload {
  tournamentId: number;
  matchId: number;
  participantId: number;
  score: number;
}