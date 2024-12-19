import type { Record } from "../../tournamentTypes"
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';
import styles from './Match.module.css'
import type { ChangeEventHandler } from "react";

interface RecordContainerProps {
  record: Record,
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const RecordContainer = ({record, onChange}: RecordContainerProps) => {
  const participants = useAppSelector(selectParticipants);

  return (
    <div key={record.participantId} className={styles.record_row}>
      <div className={styles.name}>
        {participants.find(participant => participant.id === record.participantId)?.name}
      </div>
      <input value={record.score} onChange={onChange} className={`
        ${styles.score}
        ${styles[`result_${record.result}`]}
      `} />
    </div>
  )
}

export default RecordContainer