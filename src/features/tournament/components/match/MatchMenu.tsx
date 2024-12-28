import styles from './Match.module.css'
import { MouseEventHandler } from 'react'

interface MatchMenuProps {
  editMode: boolean,
  submitMatch: MouseEventHandler<HTMLButtonElement>,
  toggleEditMode: () => void,
}

const MatchMenu = ({editMode, submitMatch, toggleEditMode}: MatchMenuProps) => {
  return (
    <div className={styles.match_menu}>
      <button onClick={toggleEditMode} className={editMode ? `${styles.active_btn}` : ""}>🖉</button>
      {editMode ? <></> : <button onClick={submitMatch}>✓</button>}
    </div>
  )
}

export default MatchMenu