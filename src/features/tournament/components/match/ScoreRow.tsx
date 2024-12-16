import type { ParticipantScore } from "../../tournamentSlice"
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';
import styles from './Match.module.css'

interface ScoreRowProps {
  score: ParticipantScore
}

const ScoreRow = ({score}: ScoreRowProps) => {
  const participants = useAppSelector(selectParticipants);

  return (
    <div key={score.participantId} className={styles.score_row}>
      <div className={styles.name}>
        {participants.find(participant => participant.id === score.participantId)?.name}
      </div>
      <div className={`
        ${styles.score}
        ${styles[`result_${score.result}`]}
      `}>
        {score.score}
      </div>
    </div>
  )
}

export default ScoreRow