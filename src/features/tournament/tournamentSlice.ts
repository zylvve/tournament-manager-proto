import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockTournaments } from "./mockTournaments";
import type { UpdateMatchPayload } from "./tournamentTypes";
import {findRecordByAdvanceFrom } from "./tournamentHelpers";

const initialState = mockTournaments; 

export const tournamentSlice = createSlice({
  name: "tournaments",
  initialState, 
  reducers: {
    updateMatch: (state, action: PayloadAction<UpdateMatchPayload>) => {
      const findMatchById = (id: number) => (state.byId[1].matches.byId[id]);

      const match = findMatchById(action.payload.matchId);
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
      if (winnerAdvancesTo === undefined) return;
      
      const nextMatch = findMatchById(winnerAdvancesTo);
      if (nextMatch === undefined) return;
      
      const updatedRecord = findRecordByAdvanceFrom(match.id, nextMatch);
      if (updatedRecord === undefined) return;
      updatedRecord.participantId = winnerId;
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
export const { updateMatch } = tournamentSlice.actions