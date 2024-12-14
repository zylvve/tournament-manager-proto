import { createSlice } from "@reduxjs/toolkit";
import { mockTournament } from "./mockTournament";

interface Participant {
  id: number;
  name: string;
}

interface ParticipantScore {
  participantId: number;
  score: number;
}

export interface Match {
  matchNo: number;
  scores: ParticipantScore[];
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

export const { selectParticipants, selectRounds } = tournamentSlice.selectors