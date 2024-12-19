import styles from './Round.module.css'
import { useAppSelector } from '../../../../app/hooks';
import { selectRounds } from '../../tournamentSlice';
import MatchContainer from '../match/MatchContainer';
import type { Round } from '../../tournamentTypes';

interface RoundContainerProps {
  round: Round;
}

const RoundContainer = ({round}: RoundContainerProps) => {
  const rounds = useAppSelector(selectRounds);
  const matches = rounds.find(rnd => rnd.roundNo === round.roundNo)?.matches;
  
  const matchesToRender = [];
  if (matches !== undefined) {
    for (let match of matches) {
      matchesToRender.push(<MatchContainer match={match} key={match.matchNo}/>)
    }
  }

  return (
    <div className={styles.round}>
      <div className={styles.round_title}>
        Round {round.roundNo}
      </div>
      <div className={styles.matches}>
        {matchesToRender}
      </div>
    </div>
  )
}

export default RoundContainer