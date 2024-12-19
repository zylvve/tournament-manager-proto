import styles from './Match.module.css'
import type { Match } from '../../tournamentTypes'
import RecordContainer from './RecordContainer';

interface MatchContainerProps {
  match: Match;
}

const MatchContainer = ({match}: MatchContainerProps) => {
  const RecordContainers = [];
  
  let key = match.matchNo * 1000;
  for (let record of match.records)  {
    RecordContainers.push(
      <RecordContainer record={record} key={++key}/>
    )
  }

  return (
    <div className={styles.match}>
      {RecordContainers}
    </div>
  )
}

export default MatchContainer