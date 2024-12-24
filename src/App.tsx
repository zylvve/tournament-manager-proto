import styles from './App.module.css'
import NewTournamentModal from './features/tournament/components/new-tournament-modal/NewTournamentModal'
import Tournament from './features/tournament/components/tournament/Tournament'

const App = () => {
  return (
    <div data-theme="dark" className={styles.app}>
      <NewTournamentModal/>
      <Tournament tournamentId={1}/>
    </div>
  )
}

export default App
