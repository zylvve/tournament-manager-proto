import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockTournaments } from "./mockTournaments";
import type { UpdateScorePayload } from "./tournamentTypes";
import {findRecordByAdvanceFrom } from "./tournamentHelpers";

const initialState = mockTournaments; 

export const tournamentSlice = createSlice({
  name: "tournaments",
  initialState, 
  reducers: {
    updateScore: (state, action: PayloadAction<UpdateScorePayload>) => {
      const { tournamentId, matchId, participantId, score } = action.payload;
      const record = state.byId[tournamentId].matches.byId[matchId].records.find(record => record.participantId === participantId);
      if (record === undefined) return;
      record.score = score;
    }
  },
  selectors: {
    selectName: tournaments => tournaments.byId[1].name,
    selectParticipants: tournaments => tournaments.byId[1].participants,
    selectRounds: tournaments => tournaments.byId[1].rounds,
    selectMatches: tournaments => tournaments.byId[1].matches,
  }
})

export const { selectParticipants, selectRounds, selectName, selectMatches } = tournamentSlice.selectors
export const { updateScore } = tournamentSlice.actions