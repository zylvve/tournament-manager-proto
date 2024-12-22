import { type FormEventHandler, useContext, useState } from "react"
import type { Record, UpdateScorePayload } from "../../tournamentTypes"
import { useAppDispatch } from "../../../../app/hooks";
import { updateScore } from "../../tournamentSlice";
import { TournamentContext } from "../tournament/Tournament";
import { MatchContext } from "./MatchContainer";
import styles from './Match.module.css';

interface ScoreContainerProps {
  record: Record,
}

const ScoreContainer = ({ record }: ScoreContainerProps) => {
  const dispatch = useAppDispatch();

  const [tempScore, setTempScore] = useState<string>("-");
  const [isWriteable, setIsWriteable] = useState<boolean>(false);

  const tournamentId = useContext(TournamentContext);
  const matchId = useContext(MatchContext);

  const submitInput: FormEventHandler = (event) => {
    event.preventDefault();
    if (record.participantId === undefined) return;
    
    setIsWriteable(false);
    const payload: UpdateScorePayload = {
      tournamentId,
      matchId,
      participantId: record.participantId,
      score: Number(tempScore),        
    }

    dispatch(updateScore(payload));
  }

  return (
    isWriteable ?
      <form onSubmit={submitInput} className={styles.input_form}>
        <input onChange={(event) => setTempScore(event.target.value)} className={`${styles.score} ${styles.score_input}`}/>
        <button className={`${styles.btn} ${styles.submit_score_btn}`}>⏎</button>
      </form>
      :
      <div onClick={() => setIsWriteable(true)} className={`${styles.score} ${styles["result_" + record.result]}`}>
        {tempScore}
      </div>
  )
}

export default ScoreContainer