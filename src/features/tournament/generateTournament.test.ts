import { generateTournament } from "./generateTournament";

test("Generating a tournament", () => {
  const participantsString = "Player 1\nPlayer 2\nPlayer 3\nPlayer 4\nPlayer 5\nPlayer 6\nPlayer 7\nPlayer 8";
  expect(generateTournament(1, "Test Tournament", participantsString)).toEqual({
    id: 1,
    name: "Test Tournament",
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
        5: {
          id: 5,
          name: "Player 5",
        },
        6: {
          id: 6,
          name: "Player 6",
        },
        7: {
          id: 7,
          name: "Player 7",
        },
        8: {
          id: 8,
          name: "Player 8",
        },
      },
      allIds: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    rounds: {
      byId: {
        1: {
          id: 1,
          name: "Round 1",
          matches: [1, 2, 3, 4],
        },
        2: {
          id: 2,
          name: "Round 2",
          matches: [5, 6],
        },
        3: {
          id: 3,
          name: "Round 3",
          matches: [7],
        },
      },
      allIds: [1, 2, 3],
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
          advanceTo: 5,
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
          advanceTo: 5,
        },
        3: {
          id: 3,
          records: [
            {
              participantId: 5,
            },
            {
              participantId: 6,
            },
          ],
          isComplete: false,
          advanceTo: 6,
        },
        4: {
          id: 4,
          records: [
            {
              participantId: 7,
            },
            {
              participantId: 8,
            },
          ],
          isComplete: false,
          advanceTo: 6,
        },
        5: {
          id: 5,
          records: [
            {
              advanceFrom: 1,
            },
            {
              advanceFrom: 2,
            },
          ],
          isComplete: false,
          advanceTo: 7,
        },
        6: {
          id: 6,
          records: [
            {
              advanceFrom: 3,
            },
            {
              advanceFrom: 4,
            },
          ],
          isComplete: false,
          advanceTo: 7,
        },
        7: {
          id: 7,
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
      },
      allIds: [1, 2, 3, 4, 5, 6, 7],
    },
  })  
})