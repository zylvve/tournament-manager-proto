import { useAppSelector } from "../../../../app/hooks"
import BracketContainer from "../bracket/BracketContainer"
import { selectName } from "../../tournamentSlice"
import styles from './Tournament.module.css'
import { createContext } from "react"

interface TournamentProps {
  tournamentId: number;
}

export const TournamentContext = createContext(0);

const Tournament = ({tournamentId}: TournamentProps) => {
  const name = useAppSelector((state) => selectName(state, tournamentId));

  return (
    <TournamentContext.Provider value={tournamentId}>
      <div className={styles.tournament}>
        <h2>{name}</h2>
        <BracketContainer/>
      </div>
    </TournamentContext.Provider>
  )
}

export default Tournament