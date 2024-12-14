import styles from './Round.module.css'
import { useAppSelector } from '../../../../app/hooks';
import { selectRounds } from '../../tournamentSlice';
import MatchContainer from '../match/MatchContainer';
import type { Round } from '../../tournamentSlice';

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
      Round {round.roundNo}
      {matchesToRender}
    </div>
  )
}

export default RoundContainer