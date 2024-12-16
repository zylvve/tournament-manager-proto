import { useAppSelector } from "../../../../app/hooks"
import BracketContainer from "../bracket/BracketContainer"
import { selectName } from "../../tournamentSlice"
import styles from './Tournament.module.css'

const Tournament = () => {
  const name = useAppSelector(selectName);

  return (
    <div className={styles.tournament}>
      <h2>{name}</h2>
      <BracketContainer/>
    </div>
  )
}

export default Tournament