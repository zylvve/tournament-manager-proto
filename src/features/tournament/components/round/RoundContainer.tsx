import styles from './Round.module.css'
import { useAppSelector } from '../../../../app/hooks';
import { selectMatches, selectRounds } from '../../tournamentSlice';
import MatchContainer from '../match/MatchContainer';
import type { Round } from '../../tournamentTypes';

interface RoundContainerProps {
  round: Round;
}

const RoundContainer = ({round}: RoundContainerProps) => {
  const rounds = useAppSelector(selectRounds);
  const matches = useAppSelector(selectMatches);
  const roundMatches = rounds.byId[round.id].matches.map(id => matches.byId[id]);
  
  const matchComponents = [];
  if (matches !== undefined) {
    for (let match of roundMatches) {
      matchComponents.push(<MatchContainer match={match} key={match.id}/>)
    }
  }

  return (
    <div className={styles.round}>
      <div className={styles.round_title}>
        {round.name}
      </div>
      <div className={styles.matches}>
        {matchComponents}
      </div>
    </div>
  )
}

export default RoundContainer