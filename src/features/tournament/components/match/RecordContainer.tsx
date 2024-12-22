import type { Record } from "../../tournamentTypes"
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';
import styles from './Match.module.css'
import ScoreContainer from "./ScoreContainer";

interface RecordContainerProps {
  record: Record,
}

const RecordContainer = ({record}: RecordContainerProps) => {
  const participants = useAppSelector(selectParticipants);

  return (
    <div key={record.participantId} className={styles.record_row}>
      <div className={styles.name}>
        {record.participantId ? participants.byId[record.participantId].name : ""}
      </div>
      <ScoreContainer record={record}/>
    </div>
  )
}

export default RecordContainer