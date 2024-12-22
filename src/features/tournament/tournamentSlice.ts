import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockTournaments } from "./mockTournaments";
import type { AdvanceWinnerPayload, CompleteMatchPayload, UpdateScorePayload } from "./tournamentTypes";
import { findRecordByAdvanceFrom } from "./tournamentHelpers";

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
    },
    completeMatch: (state, action: PayloadAction<CompleteMatchPayload>) => {
      const { tournamentId, matchId } = action.payload;
      const match = state.byId[tournamentId].matches.byId[matchId];
      if (match.isComplete) return;

      match.isComplete = true;
      let winnerRecord;
      for (let record of match.records) {
        if (winnerRecord === undefined) {
          winnerRecord = record;
        } else {
          if ((record.score ?? 0) > (winnerRecord.score ?? 0)) {
            winnerRecord = record;
          }
        }
        record.result = 'L';
      }
      
      if (winnerRecord === undefined) return;
      winnerRecord.result = 'W';
    },
    advanceWinner: (state, action: PayloadAction<AdvanceWinnerPayload>) => {
      const { tournamentId, matchId } = action.payload;
      const match = state.byId[tournamentId].matches.byId[matchId];
      const winnerId = match.records.find(record => record.result === 'W')?.participantId;
      if (winnerId === undefined || match.advanceTo === undefined) return;

      const nextMatch = state.byId[tournamentId].matches.byId[match.advanceTo];
      const updatedRecord = findRecordByAdvanceFrom(match.id, nextMatch);
      if (updatedRecord) updatedRecord.participantId = winnerId; 
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
export const { updateScore, completeMatch, advanceWinner } = tournamentSlice.actions