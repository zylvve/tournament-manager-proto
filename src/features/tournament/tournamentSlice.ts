import { createSlice } from "@reduxjs/toolkit";
import { mockTournament } from "./mockTournament";

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