import Tournament from "./features/tournament/components/tournament/Tournament"
import styles from './App.module.css'

const App = () => {
  return (
    <div data-theme="dark" className={styles.app}>
      <Tournament tournamentId={1}/>
    </div>
  )
}

export default App
