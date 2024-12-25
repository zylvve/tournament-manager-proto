import styles from './Round.module.css'
import { useAppSelector } from '../../../../app/hooks';
import { selectMatches, selectRounds } from '../../tournamentSlice';
import MatchContainer from '../match/MatchContainer';
import type { Round } from '../../tournamentTypes';
import { useContext } from 'react';
import { TournamentContext } from '../tournament/Tournament';

interface RoundContainerProps {
  round: Round;
}

const RoundContainer = ({round}: RoundContainerProps) => {
  const tournamentId = useContext(TournamentContext);
  const rounds = useAppSelector((state) => selectRounds(state, tournamentId));
  const matches = useAppSelector((state) => selectMatches(state, tournamentId));
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