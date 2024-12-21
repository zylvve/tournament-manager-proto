import type { Match } from "./tournamentTypes";

export const findRecordByAdvanceFrom = (no: number, match: Match) => {
  for (const record of match.records) {
    if (record.advanceFrom === no) {
      return record;
    }
  }
}