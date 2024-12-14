import styles from './Match.module.css'
import { Match } from '../../tournamentSlice'
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';

interface MatchContainerProps {
  match: Match;
}

const MatchContainer = ({match}: MatchContainerProps) => {
  const participants = useAppSelector(selectParticipants);
  const scoreRows = [];
  for (let scores of match.scores)  {
    scoreRows.push(
      <div key={scores.participantId}>
        {participants.find(participant => participant.id == scores.participantId)?.name}
        {" - "}
        {scores.score}
      </div>
    )
  }

  return (
    <div className={styles.match}>
      Match {match.matchNo}
      {scoreRows}
    </div>
  )
}

export default MatchContainer