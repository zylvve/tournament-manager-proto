import { useAppSelector } from '../../../../app/hooks'
import { selectRounds } from '../../tournamentSlice'
import styles from './Bracket.module.css'
import RoundContainer from '../round/RoundContainer'

const BracketContainer = () => {
  const rounds = useAppSelector(selectRounds);
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