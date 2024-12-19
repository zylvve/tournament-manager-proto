import type { Record } from "../../tournamentSlice"
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';
import styles from './Match.module.css'

interface RecordContainerProps {
  record: Record
}

const RecordContainer = ({record}: RecordContainerProps) => {
  const participants = useAppSelector(selectParticipants);

  return (
    <div key={record.participantId} className={styles.record_row}>
      <div className={styles.name}>
        {participants.find(participant => participant.id === record.participantId)?.name}
      </div>
      <div className={`
        ${styles.score}
        ${styles[`result_${record.result}`]}
      `}>
        {record.score}
      </div>
    </div>
  )
}

export default RecordContainer