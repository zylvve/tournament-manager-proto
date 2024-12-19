import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockTournament } from "./mockTournament";
import type { UpdateMatchPayload } from "./tournamentTypes";
import { findMatchByNo, findRecordByAdvanceFrom } from "./tournamentHelpers";

const initialState = mockTournament; 

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState, 
  reducers: {
    updateMatch: (state, action: PayloadAction<UpdateMatchPayload>) => {
      const match = findMatchByNo(action.payload.matchNo, state);
      if (match === undefined) return;

      let winnerRecord;
      let isComplete = true;
      for (const record of match.records) {
        record.score = action.payload.scores[record.participantId!] ?? record.score;
        if (isComplete && record.score === undefined) {
          isComplete = false;
        }
        if (!isComplete) continue;
        if (!winnerRecord) winnerRecord = record;
        else {
          if (record.score! > winnerRecord.score!) winnerRecord = record;
        }             
      }
      match.isComplete = isComplete;
      if (!isComplete) return;
      
      for (const record of match.records) {
        record.result = (record === winnerRecord) ? 'W' : 'L';
      }
        
      const winnerId = winnerRecord?.participantId;
      const winnerAdvancesTo = match.advanceTo;
      const winnerAdvancesFrom = match.matchNo;
      if (winnerAdvancesTo === undefined) return;
      
      const nextMatch = findMatchByNo(winnerAdvancesTo, state);
      if (nextMatch === undefined) return;
      
      const updatedRecord = findRecordByAdvanceFrom(winnerAdvancesFrom, nextMatch);
      if (updatedRecord === undefined) return;
      updatedRecord.participantId = winnerId;
    }
  },
  selectors: {
    selectName: tournament => tournament.name,
    selectParticipants: tournament => tournament.participants,
    selectRounds: tournament => tournament.rounds,
  }
})

export const { selectParticipants, selectRounds, selectName } = tournamentSlice.selectors
export const { updateMatch } = tournamentSlice.actions