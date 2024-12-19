import type { TournamentState } from "./tournamentTypes"

export const mockTournament: TournamentState = {
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
    {
      id: 5,
      name: "Player 5",
    },
    {
      id: 6,
      name: "Player 6",
    },
    {
      id: 7,
      name: "Player 7",
    },
    {
      id: 8,
      name: "Player 8",
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
          advanceTo: 5,
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
          advanceTo: 5,
          isComplete: false,
        },
        {
          matchNo: 3,
          records: [
            {
              participantId: 5,
            },
            {
              participantId: 6,
            },
          ],
          advanceTo: 6,
          isComplete: false,
        },
        {
          matchNo: 4,
          records: [
            {
              participantId: 7,
            },
            {
              participantId: 8,
            },
          ],
          advanceTo: 6,
          isComplete: false,
        },
      ]
    },
    {
      roundNo: 2,
      matches: [
        {
          matchNo: 5,
          records: [
            {
              advanceFrom: 1,
            },
            {
              advanceFrom: 2,
            },
          ],
          advanceTo: 7,
          isComplete: false,
        },
        {
          matchNo: 6,
          records: [
            {
              advanceFrom: 3,
            },
            {
              advanceFrom: 4,
            },
          ],
          advanceTo: 7,
          isComplete: false,
        },
      ]
    },
    {
      roundNo: 3,
      matches: [
        {
          matchNo: 7,
          records: [
            {
              advanceFrom: 5,
            },
            {
              advanceFrom: 6,
            },
          ],
          isComplete: false,
        },
      ]
    }
  ],
}