import { Participant, Round, Match, EntityList } from "./tournamentTypes";

export const generateTournament = (id: number, name: string, participantsString: string) => {
  const participants = generateParticipants(participantsString);
  const rounds = generateRounds(participants.allIds.length);
  const matches = generateMatches(rounds);
  
  return {
    id,
    name,
    participants,
    rounds,
    matches,
  }
}

const generateParticipants = (participantsString: string) => {
  const participants: EntityList<Participant> = {byId:{}, allIds:[]};
  
  const participantsNames = participantsString.split('\n');
  let participantId = 0;
  for (let name of participantsNames) {
    participantId++;
    participants.byId[participantId] = {
      id: participantId,
      name,
    };
    participants.allIds.push(participantId);
  }

  return participants;
}

const generateRounds = (noOfParticipants: number) => {
  const rounds: EntityList<Round> = {byId:{}, allIds:[]};

  const noOfRounds = Math.floor(Math.log2(noOfParticipants));
  let matchId = 0;
  for (let roundId = 1; roundId <= noOfRounds; ++roundId) {
    rounds.byId[roundId] = {
      id: roundId,
      matches: [],
      name: "Round " + roundId,
    }
    const round = rounds.byId[roundId];
    
    const matchesInRound = Math.pow(2, noOfRounds - roundId);
    for (let i = 0; i < matchesInRound; ++i) {
      matchId++;
      round.matches.push(matchId);
    }

    rounds.allIds.push(roundId);
  }

  return rounds;
}

const generateMatches = (rounds: EntityList<Round>) => {
  const matches: EntityList<Match> = {byId:{}, allIds:[]};
  
  const noOfRounds = rounds.allIds.length;
  let matchId = 0;
  for (let roundId = 1; roundId <= noOfRounds; ++roundId) {
    for (let i = 0; i < Math.pow(2, noOfRounds - roundId); ++i) {
      matchId++;

      matches.byId[matchId] = {
        id: matchId,
        isComplete: false,
        records: [],
      };
      matches.allIds.push(matchId);
      const match = matches.byId[matchId];

      if (roundId < noOfRounds) {
        const firstMatchNextRound = rounds.byId[roundId + 1].matches[0];
        match.advanceTo = firstMatchNextRound + Math.floor(i/2);
      }
      
      if (roundId === 1) {
        match.records = [
          {
            participantId: 2 * i + 1,
          },
          {
            participantId: 2 * i + 2,
          },
        ];
      } else {
        const firstMatchLastRound = rounds.byId[roundId - 1].matches[0];

        match.records = [
          {
            advanceFrom: 2 * i + firstMatchLastRound,
          },
          {
            advanceFrom: 2 * i + firstMatchLastRound + 1,
          },
        ];
      }
    }
  }

  return matches;
}
