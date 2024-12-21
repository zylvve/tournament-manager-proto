import type { TournamentSliceState } from "./tournamentTypes"

export const mockTournaments: TournamentSliceState = {
  byId: {
    1: {
      id: 1,
      name: "Test Tournament 1",
      participants: {
        byId: {
          1: {
            id: 1,
            name: "Player 1",
          },
          2: {
            id: 2,
            name: "Player 2",
          },
          3: {
            id: 3,
            name: "Player 3",
          },
          4: {
            id: 4,
            name: "Player 4",
          },
        },
        allIds: [1, 2, 3, 4],
      },
      rounds: {
        byId: {
          1: {
            id: 1,
            name: "Round 1",
            matches: [1, 2],
          },
          2: {
            id: 2,
            name: "Round 2",
            matches: [3],
          }
        },
        allIds: [1, 2],
      },
      matches: {
        byId: {
          1: {
            id: 1,
            records: [
              {
                participantId: 1,
              },
              {
                participantId: 2,
              },
            ],
            isComplete: false,
            advanceTo: 3,
          },
          2: {
            id: 2,
            records: [
              {
                participantId: 3,
              },
              {
                participantId: 4,
              },
            ],
            isComplete: false,
            advanceTo: 3,
          },
          3: {
            id: 3,
            records: [
              {
                advanceFrom: 1,
              },
              {
                advanceFrom: 2,
              },
            ],
            isComplete: false,
          },
        },
        allIds: [1, 2, 3],
      },
    }
  },
  allIds: [1],
}