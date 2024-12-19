import type { TournamentSliceState } from "./tournamentSlice"

export const mockTournament: TournamentSliceState = {
  name: "Test Tournament",
  participants: [
    {
      id: 1,
      name: "Player 1",
    },
    {
      id: 2,
      name: "Player 2",
    },
    {
      id: 3,
      name: "Player 3",
    },
    {
      id: 4,
      name: "Player 4",
    },
  ],
  rounds: [
    {
      roundNo: 1,
      matches: [
        {
          matchNo: 1,
          records: [
            {
              participantId: 1,
            },
            {
              participantId: 2,
            },
          ],
          advanceTo: 3,
          isComplete: false,
        },
        {
          matchNo: 2,
          records: [
            {
              participantId: 3,
            },
            {
              participantId: 4,
            },
          ],
          advanceTo: 3,
          isComplete: false,
        },
      ]
    },
    {
      roundNo: 2,
      matches: [
        {
          matchNo: 3,
          records: [
            {
              advanceFrom: 1,
            },
            {
              advanceFrom: 2,
            },
          ],
          isComplete: false,
        }
      ]
    }
  ],
}