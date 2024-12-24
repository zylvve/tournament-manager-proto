import { Participant, Round, Match, EntityList } from "./tournamentTypes";

export const generateTournament = (id: number, name: string, participantsString: string) => {
  const participantsNames = participantsString.split('\n');

  const participants: EntityList<Participant> = {byId:{}, allIds:[]};
  const rounds: EntityList<Round> = {byId:{}, allIds:[]};
  const matches: EntityList<Match> = {byId:{}, allIds:[]};
  
  return {
    id,
    name,
    participants,
    rounds,
    matches,
  }
}