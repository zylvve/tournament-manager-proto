import type { Match } from "./tournamentTypes";

export const findRecordByAdvanceFrom = (id: number, match: Match) => {
  for (const record of match.records) {
    if (record.advanceFrom === id) {
      return record;
    }
  }
}