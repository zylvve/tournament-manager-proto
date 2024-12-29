import styles from './Match.module.css'
import type { Match, UpdateScorePayload,  } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';
import MatchMenu from './MatchMenu';
import { createContext, useContext, MouseEventHandler, useState, useCallback } from 'react';
import { TournamentContext } from '../tournament/Tournament';
import { useAppDispatch } from '../../../../app/hooks';
import { completeMatch, advanceWinner, updateScore } from '../../tournamentSlice';
 
interface MatchContainerProps {
  match: Match;
}

export const MatchContext = createContext(0);

interface tempScoreState {
  [participantId: number]: string;
}

const MatchContainer = ({match}: MatchContainerProps) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState<boolean>(false);  
  const [tempScores, setTempScores] = useState<tempScoreState>({});
  const toggleEditMode = () => {
    if (editMode) {
      submitInputs(); 
    }
    setEditMode(!editMode);
  }
  
  const tournamentId = useContext(TournamentContext);
  
  const setTempScore = useCallback((participantId: number, newScore: string) => {
    setTempScores(tempScores => ({
      ...tempScores,
      [participantId]: newScore,
    }));
  }, [])

  const submitInputs = () => {
    for (let record of match.records) {
      if (record.participantId === undefined) break;
      
      const payload: UpdateScorePayload = {
        tournamentId,
        matchId: match.id,
        participantId: record.participantId,
        score: Number(tempScores[record.participantId]),        
      }

      dispatch(updateScore(payload));
    }
  }

  const RecordContainers = [];
  for (let [index, record] of match.records.entries()) {
    RecordContainers.push(
      <RecordContainer 
        record={record} 
        setTempScore={setTempScore} 
        editMode={editMode} 
        key={index++}
      />
    )
  }
  
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
        <MatchMenu
          submitMatch={submitMatch}
          toggleEditMode={toggleEditMode} 
          editMode={editMode}
        />
      </div>
    </MatchContext.Provider>
  )
}

export default MatchContainer