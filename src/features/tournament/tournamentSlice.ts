import { createSlice } from "@reduxjs/toolkit";
import { mockTournament } from "./mockTournament";

interface Participant {
  id: number;
  name: string;
}

type Result = 'W' | 'D' | 'L'

export interface ParticipantScore {
  participantId: number;
  score: number;
  result?: Result;
}

export interface Match {
  matchNo: number;
  scores: ParticipantScore[];
  advanceTo?: number;
}

export interface Round {
  roundNo: number;
  matches: Match[];
}

export interface TournamentSliceState {
  name: string;
  participants: Participant[];
  rounds: Round[];
}

const initialState = mockTournament; 

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState, 
  reducers: {},
  selectors: {
    selectName: tournament => tournament.name,
    selectParticipants: tournament => tournament.participants,
    selectRounds: tournament => tournament.rounds,
  }
})

export const { selectParticipants, selectRounds, selectName } = tournamentSlice.selectors