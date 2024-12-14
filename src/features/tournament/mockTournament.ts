import { TournamentSliceState } from "./tournamentSlice"

export const mockTournament: TournamentSliceState = {
  name: "mock",
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
          scores: [
            {
              participantId: 1,
              score: 3,
            },
            {
              participantId: 2,
              score: 2,
            },
          ]
        },
        {
          matchNo: 2,
          scores: [
            {
              participantId: 3,
              score: 1,
            },
            {
              participantId: 4,
              score: 0,
            },
          ]
        },
      ]
    },
    {
      roundNo: 2,
      matches: [
        {
          matchNo: 3,
          scores: [
            {
              participantId: 1,
              score: 2,
            },
            {
              participantId: 3,
              score: 1,
            },
          ]
        }
      ]
    }
  ],
}