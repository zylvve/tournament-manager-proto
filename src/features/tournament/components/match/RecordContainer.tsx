import type { Record } from "../../tournamentTypes"
import { selectParticipants } from '../../tournamentSlice';
import { useAppSelector } from '../../../../app/hooks';
import styles from './Match.module.css'
import ScoreContainer from "./ScoreContainer";
import { TournamentContext } from "../tournament/Tournament";
import { useContext } from "react";

interface RecordContainerProps {
  record: Record,
  setTempScore: (participantId: number, score: string) => void;
  editMode: boolean,
}

const RecordContainer = ({record, setTempScore, editMode }: RecordContainerProps) => {
  const tournamentId = useContext(TournamentContext);
  const participants = useAppSelector((state) => selectParticipants(state, tournamentId));

  return (
    <div key={record.participantId} className={styles.record_row}>
      <div className={styles.name}>
        {record.participantId ? participants.byId[record.participantId].name : ""}
      </div>
      <ScoreContainer record={record} setTempScore={setTempScore} editMode={editMode}/>
    </div>
  )
}

export default RecordContainer