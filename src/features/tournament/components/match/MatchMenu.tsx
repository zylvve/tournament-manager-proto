import styles from './Match.module.css'
import { MouseEventHandler } from 'react'

interface MatchMenuProps {
  submitMatch: MouseEventHandler<HTMLButtonElement>,
  toggleEditMode: () => void,
}

const MatchMenu = ({submitMatch, toggleEditMode}: MatchMenuProps) => {
  return (
    <div className={styles.match_menu}>
      <button onClick={toggleEditMode}>🖉</button>
      <button onClick={submitMatch}>✓</button>
    </div>
  )
}

export default MatchMenu