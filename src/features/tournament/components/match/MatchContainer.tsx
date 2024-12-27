import styles from './Match.module.css'
import type { Match,  } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';
import MatchMenu from './MatchMenu';
import { createContext, useContext, MouseEventHandler, useState } from 'react';
import { TournamentContext } from '../tournament/Tournament';
import { useAppDispatch } from '../../../../app/hooks';
import { completeMatch, advanceWinner } from '../../tournamentSlice';
 
interface MatchContainerProps {
  match: Match;
}

export const MatchContext = createContext(0);

const MatchContainer = ({match}: MatchContainerProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);  
  const toggleEditMode = () => {
    setEditMode(!editMode);
  }
  
  const RecordContainers = [];
  
  let key = 0;
  for (let record of match.records) {
    RecordContainers.push(
      <RecordContainer record={record} editMode={editMode} toggleEditMode={toggleEditMode} key={++key}/>
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
        <MatchMenu submitMatch={submitMatch} toggleEditMode={toggleEditMode}/>
      </div>
    </MatchContext.Provider>
  )
}

export default MatchContainer