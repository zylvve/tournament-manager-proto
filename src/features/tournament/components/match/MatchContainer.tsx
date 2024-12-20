import styles from './Match.module.css'
import type { Match, UpdateMatchPayload } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';
import { type ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { updateMatch } from '../../tournamentSlice';
 
interface MatchContainerProps {
  match: Match;
}

const MatchContainer = ({match}: MatchContainerProps) => {
  const dispatch = useAppDispatch();

  const RecordContainers = [];
  const [inputValues, setInputValues] = useState({});
  
  let key = 0;
  for (let record of match.records) {
    const updateInputValue: ChangeEventHandler<HTMLInputElement> = (event) => {
      setInputValues({
        ...inputValues,
        [record.participantId ?? ""]: event.target.value, 
      })
    };
    RecordContainers.push(
      <RecordContainer record={record} onChange={updateInputValue} key={++key}/>
    )
  }
  
  const confirm = () => {
    const payload: UpdateMatchPayload = {
      matchId: match.id,
      scores: inputValues, 
    }
    dispatch(updateMatch(payload))
  }

  return (
    <div className={styles.match}>
      {RecordContainers}
      <button className={styles.confirm_button} onClick={confirm}>✓</button>
    </div>
  )
}

export default MatchContainer