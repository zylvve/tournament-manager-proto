import styles from './App.module.css'
import TournamentTabsContainer from './features/tabs/TournamentTabsContainer'

const App = () => {
  return (
    <div data-theme="dark" className={styles.app}>
      <TournamentTabsContainer/>
    </div>
  )
}

export default App
