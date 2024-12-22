import styles from './Match.module.css'
import type { Match,  } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';
import { createContext } from 'react';
 
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
  
  return (
    <MatchContext.Provider value={match.id}>
      <div className={styles.match}>
        {RecordContainers}
      </div>
    </MatchContext.Provider>
  )
}

export default MatchContainer