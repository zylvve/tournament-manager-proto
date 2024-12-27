import { useCallback, useContext, useEffect, useState } from "react"
import { Record, UpdateScorePayload } from "../../tournamentTypes"
import { useAppDispatch } from "../../../../app/hooks";
import { updateScore } from "../../tournamentSlice";
import { TournamentContext } from "../tournament/Tournament";
import { MatchContext } from "./MatchContainer";
import styles from './Match.module.css';

interface ScoreContainerProps {
  record: Record,
  editMode: boolean,
  toggleEditMode: () => void,
}

const ScoreContainer = ({ record, editMode, toggleEditMode }: ScoreContainerProps) => {
  const dispatch = useAppDispatch();

  const [tempScore, setTempScore] = useState<string>("-");

  const tournamentId = useContext(TournamentContext);
  const matchId = useContext(MatchContext);

  const submitInput = useCallback(() => {
    if (record.participantId === undefined) return;
    
    const payload: UpdateScorePayload = {
      tournamentId,
      matchId,
      participantId: record.participantId,
      score: Number(tempScore),        
    }

    dispatch(updateScore(payload));
  }, [record, tournamentId, matchId, tempScore, dispatch])
  
  useEffect(() => {
    if (!editMode) {
      submitInput();
    }
  }, [editMode, submitInput]);

  return (
    editMode ?
      <input onChange={(event) => setTempScore(event.target.value)} className={`${styles.score} ${styles.score_input}`}/>
      :
      <div className={`${styles.score} ${styles["result_" + record.result]}`}>
        {tempScore}
      </div>
  )
}

export default ScoreContainer