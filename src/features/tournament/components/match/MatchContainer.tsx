import styles from './Match.module.css'
import type { Match } from '../../tournamentSlice'
import ScoreRow from './ScoreRow';

interface MatchContainerProps {
  match: Match;
}

const MatchContainer = ({match}: MatchContainerProps) => {
  const scoreRows = [];
  for (let score of match.scores)  {
    scoreRows.push(
      <ScoreRow score={score} key={score.participantId}/>
    )
  }

  return (
    <div className={styles.match}>
      {scoreRows}
    </div>
  )
}

export default MatchContainer