import { Record } from "../../tournamentTypes"
import styles from './Match.module.css';

interface ScoreContainerProps {
  record: Record,
  setTempScore: (participantId: number, score: string) => void;
  editMode: boolean,
}

const ScoreContainer = ({ record, setTempScore, editMode }: ScoreContainerProps) => {
  return (
    editMode ?
      <input 
        onChange={(event) => {
          setTempScore(record.participantId ?? 0, event.target.value);
        }} 
        className={`${styles.score} ${styles.score_input}`}
      />
      :
      <div className={`${styles.score} ${styles["result_" + record.result]}`}>
        {record.score ?? "-"}
      </div>
  )
}

export default ScoreContainer