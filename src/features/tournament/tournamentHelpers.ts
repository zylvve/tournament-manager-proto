import type { TournamentState, Match } from "./tournamentTypes";

export const findMatchByNo = (no: number, state: TournamentState) => {
  for (const round of state.rounds) {
    for (const match of round.matches) {
      if (match.matchNo === no) {
        return match;
      } 
    }
  }
}

export const findRecordByAdvanceFrom = (no: number, match: Match) => {
  for (const record of match.records) {
    if (record.advanceFrom === no) {
      return record;
    }
  }
}