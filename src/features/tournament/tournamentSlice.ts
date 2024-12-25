import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AdvanceWinnerPayload, CompleteMatchPayload, NewTournamentPayload, TournamentSliceState, UpdateScorePayload } from "./tournamentTypes";
import { findRecordByAdvanceFrom } from "./tournamentHelpers";
import { generateTournament } from "./generateTournament";

const initialState: TournamentSliceState = {byId: {}, allIds: []}; 

export const tournamentSlice = createSlice({
  name: "tournaments",
  initialState, 
  reducers: {
    newTournament: (state, action: PayloadAction<NewTournamentPayload>) => {
      const { name, participantString } = action.payload;
      const tournamentId = state.allIds.length + 1;
      state.allIds.push(tournamentId);
      state.byId[tournamentId] = generateTournament(tournamentId, name, participantString);
    },
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
    selectTournaments: tournaments => tournaments,
    selectName: (tournaments, id) => tournaments.byId[id].name,
    selectParticipants: (tournaments, id) => tournaments.byId[id].participants,
    selectRounds: (tournaments, id) => tournaments.byId[id].rounds,
    selectMatches: (tournaments, id) => tournaments.byId[id].matches,
  }
})

export const { selectTournaments, selectParticipants, selectRounds, selectName, selectMatches } = tournamentSlice.selectors
export const { newTournament, updateScore, completeMatch, advanceWinner } = tournamentSlice.actions