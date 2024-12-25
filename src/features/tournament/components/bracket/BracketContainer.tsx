import { useAppSelector } from '../../../../app/hooks'
import { selectRounds } from '../../tournamentSlice'
import styles from './Bracket.module.css'
import RoundContainer from '../round/RoundContainer'
import { useContext } from 'react'
import { TournamentContext } from '../tournament/Tournament'

const BracketContainer = () => {
  const tournamentId = useContext(TournamentContext);
  const rounds = useAppSelector((state) => selectRounds(state, tournamentId));
  const roundsToRender = [];
  for (let roundId of rounds.allIds) {
    let round = rounds.byId[roundId];
    roundsToRender.push(<RoundContainer round={round} key={roundId}/>) 
  }

  return (
    <div className={styles.bracket}>
      {roundsToRender}
    </div>
  )
}

export default BracketContainer