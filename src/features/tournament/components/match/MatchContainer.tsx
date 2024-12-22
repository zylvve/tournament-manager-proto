import styles from './Match.module.css'
import type { Match,  } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';
import { createContext, useContext, type MouseEventHandler } from 'react';
import { TournamentContext } from '../tournament/Tournament';
import { useAppDispatch } from '../../../../app/hooks';
import { completeMatch, advanceWinner } from '../../tournamentSlice';
 
interface MatchContainerProps {
  match: Match;
}

export const MatchContext = createContext(0);

const MatchContainer = ({match}: MatchContainerProps) => {
  const RecordContainers = [];
  
  let key = 0;
  for (let record of match.records) {
    RecordContainers.push(
      <RecordContainer record={record} key={++key}/>
    )
  }
  
  const dispatch = useAppDispatch();
  const tournamentId = useContext(TournamentContext);

  const submitMatch: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(completeMatch({
      tournamentId,
      matchId: match.id,
    }));
    dispatch(advanceWinner({
      tournamentId,
      matchId: match.id,
    }));
  }
  
  return (
    <MatchContext.Provider value={match.id}>
      <div className={styles.match}>
        {RecordContainers}
        <button className={`${styles.btn} ${styles.complete_match_btn}`} onClick={submitMatch}>✓</button>
      </div>
    </MatchContext.Provider>
  )
}

export default MatchContainer